"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { GoalCard } from "@/components/goal-card"
import { Heart } from "lucide-react"
// import { useGoals } from "@/contexts/GoalsContext"
import NewGoalDialog from "@/components/modals/add-goal-dialog"

const motivationalQuotes = [
  "Every step forward is a victory. Keep pushing!",
  "Your dedication today shapes your success tomorrow.",
  "Small progress is still progress. You're doing great!",
  "Believe in yourself. You've got this!",
]

export default function GoalsPage() {
  // const { goals } = useGoals()
  const [addGoalModalOpen, setAddGoalModalOpen] = useState(false)
  const [quote, setQuote] = useState("")

  const currentDate = new Date()
  const goals = [
    {
      title: "Read Books",
      daysLeft: 16,
      peopleCount: 65,
      totalDays: 27,
      startDate: new Date("2025-02-02"),
      currentDay: 11,
      completion: 59,
      progress: Array(27)
        .fill(false)
        .map((_, i) => i < 11),
      isFinished: false,
    },
    {
      title: "Drink Daily Water",
      daysLeft: 27,
      peopleCount: 65,
      totalDays: 27,
      startDate: currentDate,
      currentDay: 1,
      completion: 0,
      progress: Array(27).fill(false),
      isFinished: false,
    },
  ];


  useEffect(() => {
    const savedQuote = localStorage.getItem('motivationalQuote')
    
    if (savedQuote) {
      setQuote(savedQuote)
    } else {
      const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
      setQuote(randomQuote)
      localStorage.setItem('motivationalQuote', randomQuote)
    }

    return localStorage.removeItem('motivationalQuote');
  }, [])

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="bg-white/5 rounded-lg p-6 text-center">
        <div className="flex items-center justify-center gap-2 text-xl">
          <Heart className="h-5 w-5 text-red-500" />
          <p>{quote}</p>
        </div>
      </div>

      <div className="container mx-auto py-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Your Goals</h1>
          <Button onClick={() => setAddGoalModalOpen(true)}>+ Add Goal</Button>
        </div>
        <div className="grid gap-6">
          {goals.map((goal) => (
            <GoalCard key={goal.title} {...goal} />
          ))}
        </div>
      </div>

      <NewGoalDialog open={addGoalModalOpen} onOpenChange={setAddGoalModalOpen} />
    </main>
  )
}

