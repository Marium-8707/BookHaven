# BookHaven

BookHaven is a digital sanctuary for discovering and sharing philosophical and intellectual books. This web application allows users to browse books, add new books to the collection, leave reviews, and maintain a list of favorite books.

## Features

- Browse and search for books by title, author, or genre
- View detailed book information and reviews
- User authentication (login/register)
- Add books to favorites
- Add new books to the collection
- Leave reviews on books
- Responsive design for all devices
- Beautiful UI with textured backgrounds

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- Lucide React Icons
- date-fns

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/bookhaven.git
cd bookhaven

### Dependency Issues

If you encounter dependency issues, try the following:

1. Clear npm cache:
   \`\`\`bash
   npm cache clean --force
   \`\`\`

2. Delete node_modules and reinstall:
   \`\`\`bash
   rm -rf node_modules
   rm package-lock.json
   npm install
   \`\`\`

3. Make sure you're using the correct Node.js version:
   \`\`\`bash
   node -v
   # Should be v18.17.0 or higher
   \`\`\`

4. If you see React version conflicts, use the --legacy-peer-deps flag:
   \`\`\`bash
   npm install --legacy-peer-deps
   \`\`\`

5. For specific React version issues, ensure package.json has:
   \`\`\`json
   "react": "^18.2.0",
   "react-dom": "^18.2.0"
   \`\`\`

