"use client"

import { FavoritesList } from "@/components/favorites-list"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function FavoritesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <FavoritesList />
      </main>
      <Footer />
    </div>
  )
}

