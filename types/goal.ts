export interface Goal {
  id: string
  type: string
  startDate: Date
  ended_at: Date
  period: string
  supportRunner?: {
    id: string
    name: string
    avatar: string
    level: string
    completedGoals: number
  }
  peopleOnJourney: number
}

export type GoalType = "drink_daily_water" | "read_books" | "social_meeting" | "yoga" | "meditation"

export type GoalDuration = "3_days" | "1_week" | "3_weeks" | "3_months"

export const GOAL_TYPES: { value: GoalType; label: string }[] = [
  { value: "drink_daily_water", label: "Drink Daily Water" },
  { value: "read_books", label: "Read Books" },
  { value: "social_meeting", label: "Social Meeting" },
]

export const GOAL_DURATIONS: { value: GoalDuration; label: string; days: number }[] = [
  { value: "3_days", label: "3 Days", days: 3 },
  { value: "1_week", label: "1 Week", days: 7 },
  { value: "3_weeks", label: "3 Weeks", days: 21 },
  { value: "3_months", label: "3 Months", days: 90 },
]

export const GOALS = {
  TYPE: "goal_types",
  DURATION: "goal_durations"
}