"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Calendar, Heart, MessageSquare, Share2, Star } from "lucide-react"
import { motion } from "framer-motion"
import { books, reviews } from "@/lib/data"
import { cn } from "@/lib/utils"

interface BookDetailProps {
  id: string
}

export function BookDetail({ id }: BookDetailProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const book = books.find((b) => b.id === id) || books[0]
  const bookReviews = reviews.filter((r) => r.bookId === id)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="sticky top-24"
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-lg">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${book.coverImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="mt-6 flex flex-col space-y-4">
                  <Button
                    onClick={toggleFavorite}
                    variant={isFavorite ? "default" : "outline"}
                    className="w-full group"
                  >
                    <Heart
                      className={cn(
                        "mr-2 h-5 w-5 transition-all",
                        isFavorite ? "fill-primary-foreground" : "group-hover:fill-primary/20",
                      )}
                    />
                    {isFavorite ? "Added to Favorites" : "Add to Favorites"}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Share2 className="mr-2 h-5 w-5" />
                    Share
                  </Button>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <Star className="h-5 w-5 text-primary mb-1" />
                      <span className="text-lg font-bold">{book.rating}</span>
                      <span className="text-xs text-muted-foreground">Rating</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary mb-1" />
                      <span className="text-lg font-bold">{book.pages}</span>
                      <span className="text-xs text-muted-foreground">Pages</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary mb-1" />
                      <span className="text-lg font-bold">{book.year}</span>
                      <span className="text-xs text-muted-foreground">Year</span>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary mb-1" />
                      <span className="text-lg font-bold">{bookReviews.length}</span>
                      <span className="text-xs text-muted-foreground">Reviews</span>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{book.title}</h1>
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-lg text-muted-foreground">By {book.author}</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {book.genre}
                  </span>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-6">
                    <div className="prose dark:prose-invert max-w-none">
                      <p className="text-lg leading-relaxed">{book.description}</p>
                      <p className="mt-4">{book.longDescription}</p>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Key Themes</h3>
                      <div className="flex flex-wrap gap-2">
                        {book.themes.map((theme, index) => (
                          <span key={index} className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="mt-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">About the Author</h3>
                        <p className="text-muted-foreground">{book.authorBio}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3">Publication Details</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Publisher:</span>
                            <span>{book.publisher}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">Language:</span>
                            <span>{book.language}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">ISBN:</span>
                            <span>{book.isbn}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-muted-foreground">First Published:</span>
                            <span>{book.year}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Reader Reviews</h3>
                        <span className="text-sm text-muted-foreground">{bookReviews.length} reviews</span>
                      </div>

                      <div className="space-y-4">
                        {bookReviews.map((review) => (
                          <Card key={review.id} className="overflow-hidden">
                            <CardContent className="p-4">
                              <div className="flex items-start space-x-4">
                                <Avatar>
                                  <AvatarImage src={review.avatar} alt={review.name} />
                                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-medium">{review.name}</h4>
                                    <div className="flex items-center">
                                      {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                          <Star
                                            key={i}
                                            className={cn(
                                              "h-4 w-4",
                                              i < review.rating ? "fill-primary text-primary" : "text-muted-foreground",
                                            )}
                                          />
                                        ))}
                                    </div>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">{review.date}</p>
                                  <p className="mt-2">{review.content}</p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">Write a Review</h4>
                          <div className="flex items-center mb-4">
                            <span className="mr-2">Rating:</span>
                            <div className="flex">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-5 w-5 cursor-pointer text-muted-foreground hover:text-primary"
                                  />
                                ))}
                            </div>
                          </div>
                          <Textarea placeholder="Share your thoughts about this book..." className="mb-4" />
                          <Button>Submit Review</Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

