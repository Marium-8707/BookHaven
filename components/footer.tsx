import { BookOpen, Github, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"

export function Footer() {
  const currentYear = format(new Date(), "yyyy")

  return (
    <footer className="border-t accent-pattern">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-ucla-blue" />
              <span className="text-xl font-bold text-gradient">BookHaven</span>
            </Link>
            <p className="text-sm text-ucla-blue">
              A digital sanctuary for discovering and sharing philosophical and intellectual treasures.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-ucla-blue hover:text-ucla-mint">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-ucla-blue hover:text-ucla-mint">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-ucla-blue hover:text-ucla-mint">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-ucla-blue">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Favorites
                </Link>
              </li>
              <li>
                <Link href="/add-book" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Add Book
                </Link>
              </li>
              <li>
                <Link href="/auth" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-ucla-blue">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Psychology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Science
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  History
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-ucla-blue">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-ucla-blue hover:text-ucla-mint">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center border-ucla-blue/20">
          <p className="text-sm text-ucla-blue">&copy; {currentYear} BookHaven. All rights reserved.</p>
          <p className="text-sm text-ucla-blue mt-2 md:mt-0">Designed with ❤️ for book lovers</p>
        </div>
      </div>
    </footer>
  )
}

