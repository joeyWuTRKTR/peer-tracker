"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import type { Goal } from "@/types/goal"

interface GoalsContextType {
  goals: Goal[]
  addGoal: (goal: Omit<Goal, "id" | "startDate">) => void
  assignSupportRunner: (goalId: string, runner: Goal["supportRunner"]) => void
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined)

export function GoalsProvider({ children }: { children: React.ReactNode }) {
  const [goals, setGoals] = useState<Goal[]>([])

  const addGoal = (newGoal: Omit<Goal, "id" | "startDate">) => {
    setGoals((current) => [
      ...current,
      {
        ...newGoal,
        id: Math.random().toString(36).slice(2),
        startDate: new Date(),
      },
    ])
  }

  const assignSupportRunner = (goalId: string, runner: Goal["supportRunner"]) => {
    setGoals((current) => current.map((goal) => (goal.id === goalId ? { ...goal, supportRunner: runner } : goal)))
  }

  return <GoalsContext.Provider value={{ goals, addGoal, assignSupportRunner }}>{children}</GoalsContext.Provider>
}

export function useGoals() {
  const context = useContext(GoalsContext)
  if (context === undefined) {
    throw new Error("useGoals must be used within a GoalsProvider")
  }
  return context
}

