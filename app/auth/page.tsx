"use client"

import { AuthForm } from "@/components/auth-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function AuthPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AuthForm />
      </main>
      <Footer />
    </div>
  )
}

