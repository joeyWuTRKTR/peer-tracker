import { SignUpForm } from "@/components/forms/sign-up-form"

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </main>
  )
}