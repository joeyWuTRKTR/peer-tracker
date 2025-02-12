import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Youtube, Instagram, Newspaper } from "lucide-react"

interface SupportRunner {
  name: string
  title: string
  bio: string
  images: string[]
  youtube?: string
  instagram?: string
  blog?: string
  groupSize: number
  achievements: string[]
}

const supportRunners: SupportRunner[] = [
  {
    name: "Alex Johnson",
    title: "Fitness & Wellness Coach",
    bio: "Passionate about helping others achieve their fitness goals. Certified personal trainer with 5+ years of experience in group fitness and nutrition counseling.",
    images: [
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
    ],
    youtube: "https://youtube.com/alexfitness",
    instagram: "https://instagram.com/alexjohnsonfit",
    blog: "https://alexjohnson.fitness/blog",
    groupSize: 250,
    achievements: ["Helped 1000+ clients", "Featured in Fitness Magazine", "Authored 'The 30-Day Transformation'"],
  },
  {
    name: "Sarah Lee",
    title: "Career Development Specialist",
    bio: "Dedicated to empowering professionals to reach their career aspirations. With a background in HR and career coaching, I specialize in resume building, interview prep, and career transitions.",
    images: [
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
      "https://sjc.microlink.io/GJ6qiXLBKtYqqXMhb-SoyzvNlNI6Qu4nBsgtBGJKCP6Xn1Uy1JfCbg0mUpNUVB3hi7G3xWZTP0yS5tf_gzniHw.jpeg",
    ],
    youtube: "https://youtube.com/sarahcareercoach",
    instagram: "https://instagram.com/sarahleecareers",
    groupSize: 180,
    achievements: [
      "98% client satisfaction rate",
      "Speaker at Career Expo 2023",
      "LinkedIn Top Voice in Career Development",
    ],
  },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Support Runners</h1>

        <div className="space-y-12">
          {supportRunners.map((runner) => (
            <Card key={runner.name} className="overflow-hidden">
              <CardHeader>
                <CardTitle>{runner.name}</CardTitle>
                <p className="text-muted-foreground">{runner.title}</p>
              </CardHeader>
              <CardContent>
                <div className="md:flex gap-8">
                  <div className="md:w-1/3 space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      {runner.images.slice(0, 5).map((img, index) => (
                        <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                          <Image
                            src={img || "/placeholder.svg"}
                            alt={`${runner.name} image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center space-x-4">
                      {runner.youtube && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={runner.youtube} target="_blank" rel="noopener noreferrer">
                            <Youtube className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {runner.instagram && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={runner.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {runner.blog && (
                        <Button variant="outline" size="icon" asChild>
                          <a href={runner.blog} target="_blank" rel="noopener noreferrer">
                            <Newspaper className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4 mt-4 md:mt-0">
                    <p>{runner.bio}</p>
                    <div>
                      <h3 className="font-semibold mb-2">Achievements</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {runner.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Group Size: {runner.groupSize}</Badge>
                      <Button>Join Group</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

