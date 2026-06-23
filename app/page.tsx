"use client";

import { useState } from "react";

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
  const [idea, setIdea] = useState("");
  const [story, setStory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCreateStory() {
    const trimmed = idea.trim();
    if (!trimmed || isLoading) return;

    setIsLoading(true);
    setError("");
    setStory("");

    try {
      const response = await fetch("/api/story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea: trimmed }),
      });

      const data = (await response.json()) as {
        story?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStory(data.story ?? "");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-purple-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl" />

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
        <span className="mb-6 rounded-full border border-purple-300/60 bg-white/60 px-4 py-1.5 text-sm font-medium text-purple-700 backdrop-blur">
          Powered by AI · Made for bedtime
        </span>

        <h1 className="text-balance text-5xl font-extrabold tracking-tight text-purple-600 drop-shadow-sm sm:text-6xl">
          My Magical Storybook
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
              Tell us your story ✨
            </label>

            <textarea
              id="memory"
              name="memory"
              rows={5}
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
              disabled={isLoading}
              placeholder="Describe a memory or an idea..."
              className="w-full resize-none rounded-2xl border-2 border-purple-200 bg-cream/60 p-4 text-base text-ink shadow-inner outline-none transition placeholder:text-ink/40 focus:border-purple-400 focus:ring-4 focus:ring-purple-200 disabled:opacity-60"
            />

            <button
              type="button"
              onClick={handleCreateStory}
              disabled={isLoading || !idea.trim()}
              className="group mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 px-8 py-5 text-xl font-extrabold text-white shadow-lg shadow-purple-300/50 transition hover:scale-[1.03] hover:shadow-xl hover:shadow-pink-300/50 active:scale-100 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <span className="text-2xl">⏳</span>
                  Writing your story...
                </>
              ) : (
                <>
                  <span className="text-2xl transition group-hover:rotate-12">
                    🪄
                  </span>
                  Create my magical story
                </>
              )}
            </button>

            {error && (
              <p className="mt-4 rounded-2xl border-2 border-red-200 bg-red-50 p-4 text-left text-sm font-medium text-red-600">
                {error}
              </p>
            )}
          </div>

          {story && (
            <div className="mt-8 rounded-[2rem] border-4 border-amber-200 bg-gradient-to-br from-cream to-amber-50/60 p-6 text-left shadow-xl sm:p-8">
              <div className="mb-4 flex items-center gap-2 text-lg font-bold text-amber-600">
                <span className="text-2xl">📖</span>
                Your magical story
              </div>
              <div className="whitespace-pre-wrap text-base leading-relaxed text-ink/90">
                {story}
              </div>
            </div>
          )}
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
