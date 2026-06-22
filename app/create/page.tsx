import Link from "next/link";

export default function CreatePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Create a story</h1>
      <p className="mt-4 text-ink/70">
        This is where the storybook builder will live. Wire it up to your AI
        provider of choice and start generating pages.
      </p>

      <form className="mt-10 w-full space-y-4 text-left">
        <label className="block">
          <span className="text-sm font-medium">Story idea</span>
          <textarea
            name="idea"
            rows={4}
            placeholder="A curious fox who learns to share with the forest animals..."
            className="mt-1 w-full rounded-xl border border-ink/15 bg-white/70 p-3 outline-none focus:border-purple-400"
          />
        </label>

        <button
          type="submit"
          disabled
          className="w-full cursor-not-allowed rounded-full bg-ink/40 px-8 py-3.5 font-semibold text-cream"
        >
          Generate (coming soon)
        </button>
      </form>

      <Link
        href="/"
        className="mt-8 text-sm font-medium text-purple-700 hover:underline"
      >
        ← Back home
      </Link>
    </main>
  );
}
