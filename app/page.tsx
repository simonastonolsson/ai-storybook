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

        <div className="mt-12 w-full max-w-2xl">
          <div className="relative rounded-[2rem] border-4 border-dashed border-purple-300/70 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-8">
            <div className="pointer-events-none absolute -top-5 -left-3 text-4xl">
              🌟
            </div>
            <div className="pointer-events-none absolute -top-5 -right-3 text-4xl">
              🦊
            </div>

            <label
              htmlFor="memory"
              className="mb-3 block text-left text-lg font-bold text-purple-700"
            >
              Berätta om ett minne ✨
            </label>

            <textarea
              id="memory"
              name="memory"
              rows={5}
              placeholder="Till exempel: Den dagen vi byggde en koja i skogen och hittade en liten igelkott..."
              className="w-full resize-none rounded-2xl border-2 border-purple-200 bg-cream/60 p-4 text-base text-ink shadow-inner outline-none transition placeholder:text-ink/40 focus:border-purple-400 focus:ring-4 focus:ring-purple-200"
            />

            <button
              type="button"
              className="group mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 px-8 py-5 text-xl font-extrabold text-white shadow-lg shadow-purple-300/50 transition hover:scale-[1.03] hover:shadow-xl hover:shadow-pink-300/50 active:scale-100"
            >
              <span className="text-2xl transition group-hover:rotate-12">
                🪄
              </span>
              Skapa min magiska saga
            </button>
          </div>
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
        Built with Next.js · Story Nest
      </footer>
    </main>
  );
}
