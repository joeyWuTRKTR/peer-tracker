"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"

const challengeData = {
  title: "30-Day Goal Crusher Challenge",
  description: "Push yourself to achieve your goals every day for 30 days!",
  startDate: "2025-02-15",
  endDate: "2025-03-16",
  totalDays: 30,
  completedDays: 7,
  participants: 1234,
  rewards: [
    { day: 7, reward: "Bronze Badge" },
    { day: 15, reward: "Silver Badge" },
    { day: 30, reward: "Gold Badge + 500 Points" },
  ],
}

export default function ChallengePage() {
  const [isJoined, setIsJoined] = useState(false)
  const progress = (challengeData.completedDays / challengeData.totalDays) * 100

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">{challengeData.title}</h1>
          <p className="text-gray-400">{challengeData.description}</p>
        </div>

        <div className="bg-white/5 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-400">Start Date</p>
              <p>{challengeData.startDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">End Date</p>
              <p>{challengeData.endDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Participants</p>
              <p>{challengeData.participants}</p>
            </div>
          </div>
          <Progress value={progress} className="h-2 mb-2" />
          <p className="text-center text-sm text-gray-400">
            {challengeData.completedDays} / {challengeData.totalDays} days completed
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {challengeData.rewards.map((reward, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
              <p className="text-xl font-semibold mb-2">Day {reward.day}</p>
              <p className="text-sm text-gray-400">{reward.reward}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          {isJoined ? (
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              Check In Today
            </Button>
          ) : (
            <Button size="lg" onClick={() => setIsJoined(true)}>
              Join Challenge
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}