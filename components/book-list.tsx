"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookHeart, BookOpen, Star } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { books } from "@/lib/data"

export function BookList() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredBooks = activeTab === "all" ? books : books.filter((book) => book.genre.toLowerCase() === activeTab)

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
    <section id="books" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Collection</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover a curated selection of philosophical and intellectual works that challenge perspectives and expand
            minds.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="grid grid-cols-5 gap-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
              <TabsTrigger value="psychology">Psychology</TabsTrigger>
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
            >
              {filteredBooks.map((book) => (
                <motion.div key={book.id} variants={item}>
                  <Link href={`/book/${book.id}`}>
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
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <BookHeart className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Load More Books
          </Button>
        </div>
      </div>
    </section>
  )
}

