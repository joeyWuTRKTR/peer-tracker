"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { addDays } from "date-fns"
import { supabase } from "@/database/supabase"
import toast from "react-hot-toast"
import { useUser } from "@/contexts/UserContext"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { DialogHeader } from "../ui/dialog"
import { GOAL_DURATIONS, GOAL_TYPES, GoalDuration, GoalType } from "@/types/goal"

interface AddGoalDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onGoalAdded?: () => void
}

export default function AddNewGoalDialog({ open, onOpenChange, onGoalAdded }: AddGoalDialogProps) {
  const [goalType, setGoalType] = useState<GoalType>()
  const [duration, setDuration] = useState<GoalDuration>()

  const { user } = useUser()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!goalType || !duration || !user) {
      toast.error("Please select a goal type and duration")
      return
    }

    setIsSubmitting(true)
    try {
      const durationDays = GOAL_DURATIONS.find((d) => d.value === duration)?.days || 30
      const startDate = new Date()
      const endDate = addDays(startDate, durationDays)

      const { error } = await supabase.from("goals").insert({
        user_id: user.id,
        type: goalType,
        started_at: startDate.toISOString(),
        ended_at: endDate.toISOString(),
      })

      if (error) throw error

      toast.success("Goal added successfully!")
      onOpenChange(false)
      onGoalAdded?.()
    } catch (error) {
      console.error("Error adding goal:", error)
      toast.error("Failed to add goal. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Goal</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Select value={goalType} onValueChange={(value: GoalType) => setGoalType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select goal type" />
              </SelectTrigger>
              <SelectContent>
                {GOAL_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Select value={duration} onValueChange={(value: GoalDuration) => setDuration(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                {GOAL_DURATIONS.map((duration) => (
                  <SelectItem key={duration.value} value={duration.value}>
                    {duration.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button onClick={handleSubmit} disabled={!goalType || !duration || isSubmitting} className="w-full">
          {isSubmitting ? "Adding Goal..." : "Add Goal"}
        </Button>
      </DialogContent>
    </Dialog>
  )
}