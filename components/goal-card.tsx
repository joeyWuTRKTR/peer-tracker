"use client"

import { Button } from "@/components/ui/button"
import { differenceInDays } from "date-fns"
import { Users } from "lucide-react"
import { useState } from "react"
import { useGoals } from "@/contexts/GoalsContext"
import { Goal } from "@/types/goal"
import { SupportRunnerModal } from "./modals/support-runner-modal"

const mockRunners = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "/placeholder.svg",
    level: "Gold",
    completedGoals: 47,
  },
  {
    id: "2",
    name: "Mike Johnson",
    avatar: "/placeholder.svg",
    level: "Silver",
    completedGoals: 23,
  },
]

export function GoalCard({ goal }: { goal: Goal }) {
  const [showRunnerModal, setShowRunnerModal] = useState(false)
  const { assignSupportRunner } = useGoals()

  const daysLeft = differenceInDays(new Date(goal.endDate), new Date())

  const handleFindRunner = () => {
    // Randomly assign a support runner
    const runner = mockRunners[Math.floor(Math.random() * mockRunners.length)]
    assignSupportRunner(goal.id, runner)
  }

  return (
    <div className="rounded-lg border border-white/10 p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-lg">{goal.title}</h3>
          <span className="inline-block px-2 py-1 rounded-full bg-white/10 text-sm mt-2">{goal.category}</span>
        </div>
        {goal.supportRunner ? (
          <Button variant="secondary" onClick={() => setShowRunnerModal(true)}>
            View Runner
          </Button>
        ) : (
          <Button variant="secondary" onClick={handleFindRunner} className="bg-green-500 hover:bg-green-600 text-white">
            Find Support Runner
          </Button>
        )}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <div>{daysLeft} days left</div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          {goal.peopleOnJourney.toLocaleString()} people on this journey
        </div>
      </div>

      {goal.supportRunner && (
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
          <img
            src={goal.supportRunner.avatar || "/placeholder.svg"}
            alt={goal.supportRunner.name}
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium">{goal.supportRunner.name}</p>
            <p className="text-gray-400">Your Support Runner</p>
          </div>
        </div>
      )}

      <SupportRunnerModal open={showRunnerModal} onOpenChange={setShowRunnerModal} runner={goal.supportRunner} />
    </div>
  )
}

