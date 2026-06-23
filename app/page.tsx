export default function Page() {
  return (
    <>
      <div className="mt-12 w-full max-w-2xl">
        <div className="relative rounded-[2rem] border-4 border-dashed border-purple-300/70 bg-white/80 p-6 shadow-xl backdrop-blur">
          <div className="pointer-events-none absolute -top-5 -left-3 text-4xl">🌟</div>
          <textarea
            id="memory"
            name="memory"
            rows={5}
            className="w-full bg-transparent text-lg placeholder:text-gray-500 focus:outline-none"
            placeholder="Till exempel: Den dagen vi byggde en koja i skogen..."
          />
        </div>
        <button
          type="button"
          className="group mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-8 py-4 text-xl font-bold text-white transition-transform duration-300 hover:scale-105"
        >
          <span className="transition group-hover:rotate-12">🪄</span>
          Skapa min magiska saga
        </button>
      </div>
    </>
  );
}
