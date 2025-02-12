"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Goal } from "@/types/goal"
import { Trophy } from "lucide-react"

interface SupportRunnerModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  runner: Goal["supportRunner"]
}

export function SupportRunnerModal({ open, onOpenChange, runner }: SupportRunnerModalProps) {
  if (!runner) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black border-white/10 text-white">
        <DialogHeader>
          <DialogTitle>Support Runner Profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <img src={runner.avatar || "/placeholder.svg"} alt={runner.name} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-semibold">{runner.name}</h3>
              <p className="text-sm text-gray-400">Level {runner.level} Runner</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-yellow-500">
            <Trophy className="h-5 w-5" />
            <span>{runner.completedGoals} Goals Completed</span>
          </div>
          <Button className="w-full" variant="secondary">
            Send Message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

