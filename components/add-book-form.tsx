"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Upload } from "lucide-react"

export function AddBookForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Add a New Book</h1>
            <p className="text-muted-foreground max-w-2xl">
              Contribute to our collection by adding philosophical and intellectual works.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Book Information</CardTitle>
                <CardDescription>Please provide detailed information about the book you want to add.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter book title" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Input id="author" placeholder="Enter author name" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="genre">Genre</Label>
                      <Select>
                        <SelectTrigger id="genre">
                          <SelectValue placeholder="Select genre" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="philosophy">Philosophy</SelectItem>
                          <SelectItem value="psychology">Psychology</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="history">History</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year">Publication Year</Label>
                      <Input id="year" type="number" placeholder="YYYY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pages">Number of Pages</Label>
                      <Input id="pages" type="number" placeholder="Enter pages" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Brief overview of the book"
                      className="resize-none"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="long-description">Detailed Description</Label>
                    <Textarea
                      id="long-description"
                      placeholder="Comprehensive description of the book's content and themes"
                      className="resize-none"
                      rows={6}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Cover Image</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">
                        Drag and drop your file here, or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">Supports JPG, PNG or WebP up to 5MB</p>
                      <Input id="cover" type="file" className="hidden" accept="image/jpeg,image/png,image/webp" />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-4"
                        onClick={() => document.getElementById("cover")?.click()}
                      >
                        Select File
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" disabled={isSubmitting || isSuccess} className="min-w-[120px]">
                      {isSubmitting ? "Submitting..." : isSuccess ? "Success!" : "Submit"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

