import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <Section>
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-6">Welcome to Ben's Template</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            A modern website template built with Next.js 15, 
            TypeScript, Tailwind CSS, and shadcn/ui components.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Next.js 15</li>
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">UI Components</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>shadcn/ui library</li>
                <li>Responsive design</li>
                <li>Dark mode support</li>
                <li>Accessible components</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Development</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Fast refresh</li>
                <li>ESLint configured</li>
                <li>Well-organized structure</li>
                <li>SEO optimized</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <Section className="bg-muted/30">
        <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
        <div className="p-6 bg-background rounded-lg">
          <code className="block whitespace-pre text-sm">
{`# Clone the repository
git clone https://github.com/yourusername/bens-template.git

# Navigate to the project
cd bens-template

# Install dependencies
npm install

# Start development server
npm run dev`}
          </code>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold mb-6">Project Structure</h2>
        <p className="mb-4 text-muted-foreground">
          The project follows a clean, modular structure that makes it easy to maintain and extend.
        </p>
        <div className="p-6 border rounded-lg">
          <pre className="text-sm">
{`src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── layouts/      # Layout components
│   └── ui/           # UI components
├── lib/              # Utility functions
└── styles/           # Global styles`}
          </pre>
        </div>
      </Section>
    </>
  );
}