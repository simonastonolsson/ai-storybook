import Link from "next/link";

const features = [
  {
    title: "Describe your idea",
    description:
      "Pick a hero, a setting and a lesson. A sentence is all it takes to get started.",
    icon: "✨",
  },
  {
    title: "AI writes the story",
    description:
      "Age-appropriate chapters are generated with a warm, read-aloud tone.",
    icon: "📖",
  },
  {
    title: "Illustrate every page",
    description:
      "Each scene gets matching artwork so the whole book feels handcrafted.",
    icon: "🎨",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-purple-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl" />

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-6 rounded-full border border-purple-300/60 bg-white/60 px-4 py-1.5 text-sm font-medium text-purple-700 backdrop-blur">
          Powered by AI · Made for bedtime
        </span>

        <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
          Turn any idea into a
          <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
            {" "}
            magical storybook
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-ink/70">
          Story Nest helps you write and illustrate personalized books in
          minutes.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/create"
            className="rounded-full bg-ink px-8 py-3.5 text-base font-semibold text-cream shadow-lg transition hover:scale-[1.02] hover:bg-purple-700"
          >
            Create your first story
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/15 bg-white/60 px-8 py-3.5 text-base font-semibold text-ink backdrop-blur transition hover:bg-white"
          >
            Read the docs
          </a>
        </div>

        <div className="mt-20 grid w-full gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-ink/10 bg-white/70 p-6 text-left shadow-sm backdrop-blur transition hover:shadow-md"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h2 className="mb-2 text-lg font-semibold">{feature.title}</h2>
              <p className="text-sm text-ink/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-ink/10 py-8 text-center text-sm text-ink/50">
        Built with Next.js · ai-storybook
      </footer>
    </main>
  );
}
