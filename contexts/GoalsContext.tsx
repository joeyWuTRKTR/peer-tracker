"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { Goal } from "@/types/goal"
import { supabase } from "@/database/supabase"
import { useUser } from "./UserContext"

interface GoalsContextType {
  goals: Goal[]
  addGoal: (goal: Omit<Goal, "id" | "startDate">) => void
  assignSupportRunner: (goalId: string, runner: Goal["supportRunner"]) => void
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined)

export function GoalsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
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

  const fetchGoalsByUserId = async (userId: string | undefined) => {
    if (!userId) return null
  
    const { data, error } = await supabase
      .from('goals')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error:', error)
      return null
    }

    setGoals(data);
  }

  useEffect(() => {
    fetchGoalsByUserId(user?.id)
  }, [user?.id])

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

