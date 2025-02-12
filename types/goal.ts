export interface Goal {
  id: string
  title: string
  category: string
  startDate: Date
  endDate: Date
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

export type GoalType = "quit_bad_habit" | "exercise" | "learn_skill" | "read_books" | "meditation";

export type GoalDuration = "1_week" | "2_weeks" | "3_weeks" | "1_month" | "3_months"

export const GOAL_TYPES: { value: GoalType; label: string }[] = [
  { value: "quit_bad_habit", label: "Quit Bad Habit" },
  { value: "exercise", label: "Exercise" },
  { value: "learn_skill", label: "Learn a Skill" },
  { value: "read_books", label: "Read Books" },
  { value: "meditation", label: "Meditation" },
]

export const GOAL_DURATIONS: { value: GoalDuration; label: string; days: number }[] = [
  { value: "1_week", label: "1 Week", days: 7 },
  { value: "2_weeks", label: "2 Weeks", days: 14 },
  { value: "3_weeks", label: "3 Weeks", days: 21 },
  { value: "1_month", label: "1 Month", days: 30 },
  { value: "3_months", label: "3 Months", days: 90 },
]