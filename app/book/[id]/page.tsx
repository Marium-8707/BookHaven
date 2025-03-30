"use client"

import { BookDetail } from "@/components/book-detail"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { useParams } from "next/navigation"

export default function BookPage() {
  const params = useParams()
  const bookId = params.id as string

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BookDetail id={bookId} />
      </main>
      <Footer />
    </div>
  )
}

