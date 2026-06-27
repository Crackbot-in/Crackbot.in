export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-blue-500 font-semibold tracking-[0.3em] uppercase mb-4">
          Crackbot
        </p>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Website
          <br />
          Under Construction
        </h1>

        <p className="mt-8 text-zinc-400 text-lg leading-8">
          At Crackbot we are building an open cybersecurity research platform focused
          on threat intelligence, malware analysis, vulnerability research,
          digital forensics, offensive security and community-driven knowledge
          sharing.
        </p>

        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/Crackbot-in"
            target="_blank"
            className="rounded-xl border border-zinc-700 px-6 py-3 hover:border-blue-500 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:admin@crackbot.in"
            className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-500 transition"
          >
            Contact
          </a>
        </div>

        <div className="mt-16 text-sm text-zinc-600">
          © {new Date().getFullYear()} Crackbot Research Group
        </div>
      </div>
    </main>
  );
}