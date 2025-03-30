"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BookOpen, Search } from "lucide-react"
import Link from "next/link"
import { books } from "@/lib/data"

export function Hero() {
  const featuredBooks = books.slice(0, 4)

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover the world of <span className="text-gradient">philosophical</span> thought
            </h1>
            <p className="text-lg text-ucla-lightBlue max-w-md">
              BookHaven is a digital sanctuary for exploring intellectual treasures and expanding your philosophical
              horizons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="group bg-ucla-mint text-ucla-blue hover:bg-ucla-mint/90">
                <Link href="#books">
                  <BookOpen className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Explore Books
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-ucla-lightBlue text-ucla-lightBlue hover:bg-ucla-blue/10"
              >
                <Link href="/auth">
                  <Search className="mr-2 h-5 w-5" />
                  Find Your Next Read
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-ucla-blue/20 to-ucla-mint/20 rounded-2xl blur-3xl" />
              <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
                {featuredBooks.map((book, i) => (
                  <motion.div
                    key={book.id}
                    initial={{ y: 20 * i, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="glass-effect rounded-xl p-4 aspect-[3/4] flex items-end"
                    style={{
                      backgroundImage: `url(${book.coverImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="glass-effect rounded-lg p-2 w-full">
                      <h3 className="text-xs font-medium truncate">{book.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-ucla-mint/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-ucla-pink/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

