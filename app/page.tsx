export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* Main Headline Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Turn any idea into a <span className="text-purple-500">magical storybook</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Story Nest helps you write and illustrate personalized books in minutes.
        </p>
      </div>

      {/* New Story Creation Section */}
      <div className="mt-12 w-full max-w-2xl">
        <div className="relative rounded-[2rem] border-4 border-dashed border-purple-300/70 bg-white/80 p-6 shadow-xl backdrop-blur">
          <div className="pointer-events-none absolute -top-5 -left-3 text-4xl">🌟</div>
          <textarea
            id="memory"
            name="memory"
            rows={5}
            className="w-full bg-transparent text-lg placeholder:text-gray-500 focus:outline-none"
            placeholder="For example: The day we built a fort in the woods..."
          />
        </div>
        <button
          type="button"
          className="group mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-8 py-4 text-xl font-bold text-white transition-transform duration-300 hover:scale-105"
        >
          <span className="transition group-hover:rotate-12">🪄</span>
          Create my magical story
        </button>
      </div>

      {/* Feature Highlight Section */}
      <div className="mt-20 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        <div className="rounded-lg bg-white/50 p-6 shadow-md">
          <h3 className="text-xl font-semibold">Describe your idea</h3>
          <p className="mt-2 text-gray-600">Pick a hero, a setting and a lesson. A sentence is all it takes to get started.</p>
        </div>
        <div className="rounded-lg bg-white/50 p-6 shadow-md">
          <h3 className="text-xl font-semibold">AI writes the story</h3>
          <p className="mt-2 text-gray-600">Age-appropriate chapters are generated with a warm, read-aloud tone.</p>
        </div>
        <div className="rounded-lg bg-white/50 p-6 shadow-md">
          <h3 className="text-xl font-semibold">Illustrate every page</h3>
          <p className="mt-2 text-gray-600">Each scene gets matching artwork so the whole book feels handcrafted.</p>
        </div>
      </div>
    </main>
  );
}
