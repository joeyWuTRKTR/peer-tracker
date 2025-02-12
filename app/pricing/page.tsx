import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Basic",
    price: "$0",
    description: "For individuals just getting started",
    features: ["Set up to 5 goals", "Basic progress tracking", "Community access"],
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For serious goal-setters",
    features: ["Unlimited goals", "Advanced analytics", "Priority community support", "Exclusive workshops"],
  },
  {
    name: "Team",
    price: "$29.99",
    description: "For teams and organizations",
    features: ["Everything in Pro", "Team goal setting", "Collaborative tools", "Admin dashboard"],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">

      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

