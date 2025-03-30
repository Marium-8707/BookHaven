"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Trash2, BookOpen, Star } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { books } from "@/lib/data"

export function FavoritesList() {
  // For demo purposes, we'll use a subset of books as favorites
  const favoriteBooks = books.slice(0, 3)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="page-transition"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Favorite Books</h1>
            <p className="text-muted-foreground max-w-2xl">
              Your personal collection of philosophical and intellectual treasures.
            </p>
          </div>

          {favoriteBooks.length > 0 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
            >
              {favoriteBooks.map((book) => (
                <motion.div key={book.id} variants={item}>
                  <Card className="book-card h-full overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                        style={{ backgroundImage: `url(${book.coverImage})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      <div className="absolute top-2 right-2 flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
                        <Star className="h-3 w-3 fill-primary text-primary" />
                        <span className="text-xs font-medium">{book.rating}</span>
                      </div>
                      <Button variant="destructive" size="icon" className="absolute top-2 left-2 h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-3">
                      <h3 className="font-semibold text-sm line-clamp-1">{book.title}</h3>
                      <p className="text-xs text-muted-foreground">{book.author}</p>
                    </CardContent>
                    <CardFooter className="p-3 pt-0 flex justify-between">
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {book.genre}
                      </span>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{book.pages}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="glass-effect rounded-full p-8 mb-6">
                <BookOpen className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-2">No favorites yet</h2>
              <p className="text-muted-foreground mb-6">Start adding books to your favorites to see them here.</p>
              <Button asChild>
                <Link href="/">Browse Books</Link>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

