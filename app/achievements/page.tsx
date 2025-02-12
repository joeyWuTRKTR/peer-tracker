"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

type Achievement = {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  comments: {
    id: number;
    author: string;
    avatar: string;
    content: string;
  }[];
};

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Completed 30-Day Coding Challenge",
    date: "2024-03-15",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    comments: [
      {
        id: 1,
        author: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
        content: "Amazing achievement! Your dedication is inspiring! 🎉"
      },
      {
        id: 2,
        author: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
        content: "This is incredible progress. Keep pushing forward! 💪"
      }
    ]
  },
  {
    id: 2,
    title: "Launched First Web Application",
    date: "2024-03-10",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
    comments: [
      {
        id: 3,
        author: "Emily White",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
        content: "Congratulations on this milestone! Looking forward to seeing more from you! 🚀"
      }
    ]
  }
];

export default function AchievementsPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Achievements</h1>
        <div className="space-y-6">
          {achievements.map((achievement) => (
            <Card key={achievement.id}>
              <CardHeader>
                <CardTitle>{achievement.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Achieved on {new Date(achievement.date).toLocaleDateString()}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <img
                    src={achievement.imageUrl}
                    alt={achievement.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Community Support</h3>
                  {achievement.comments.map((comment) => (
                    <div key={comment.id} className="flex items-start space-x-4">
                      <Avatar>
                        <img src={comment.avatar} alt={comment.author} />
                      </Avatar>
                      <div>
                        <p className="font-medium">{comment.author}</p>
                        <p className="text-muted-foreground">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}