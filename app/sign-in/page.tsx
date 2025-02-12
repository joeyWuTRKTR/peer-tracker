import { SignInForm } from "@/components/forms/sign-in-form"

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
    </main>
  )
}