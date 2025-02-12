"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GoalCard } from "@/components/goal-card"
import { Heart } from "lucide-react"
import { useGoals } from "@/contexts/GoalsContext"
import NewGoalDialog from "@/components/modals/add-goal-dialog"

const motivationalQuotes = [
  "Every step forward is a victory. Keep pushing!",
  "Your dedication today shapes your success tomorrow.",
  "Small progress is still progress. You're doing great!",
  "Believe in yourself. You've got this!",
]

export default function GoalsPage() {
  const { goals } = useGoals()
  const [addGoalModalOpen, setAddGoalModalOpen] = useState(false)

  // Randomly select a motivational quote
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="bg-white/5 rounded-lg p-6 mb-8 text-center">
        <div className="flex items-center justify-center gap-2 text-xl">
          <Heart className="h-5 w-5 text-red-500" />
          <p>{randomQuote}</p>
        </div>
      </div>

      <div className="flex justify-end mb-8">
        <Button onClick={() => setAddGoalModalOpen(true)}>+ Add Goal</Button>
      </div>

      <div className="rounded-lg border border-white/10 p-8">
        <h1 className="text-2xl font-semibold mb-8">Your Goals</h1>

        {goals.length === 0 ? (
          <div className="text-center text-gray-400 py-12">No goals yet. Add your first goal above!</div>
        ) : (
          <div className="grid gap-6">
            {goals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        )}
      </div>

      <NewGoalDialog open={addGoalModalOpen} onOpenChange={setAddGoalModalOpen} />
    </main>
  )
}

