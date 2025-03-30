"use client"

import { AddBookForm } from "@/components/add-book-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function AddBookPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AddBookForm />
      </main>
      <Footer />
    </div>
  )
}

