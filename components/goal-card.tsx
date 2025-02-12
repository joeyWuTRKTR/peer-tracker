"use client"

import { Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressCalendar } from "./progress-calendar"

interface GoalCardProps {
  title: string
  daysLeft: number
  peopleCount: number
  totalDays: number
  startDate: Date
  currentDay: number
  completion: number
  progress: boolean[]
  isFinished: boolean
}

export function GoalCard({
  title,
  daysLeft,
  peopleCount,
  totalDays,
  startDate,
  currentDay,
  completion,
  progress,
  isFinished,
}: GoalCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <Button variant="default">Find Support Runner</Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{daysLeft} days left</span>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>{peopleCount} people on this journey</span>
          </div>
        </div>

        <ProgressCalendar
          totalDays={totalDays}
          startDate={startDate}
          currentDay={currentDay}
          completion={completion}
          progress={progress}
          isFinished={isFinished}
        />
      </CardContent>
    </Card>
  )
}

