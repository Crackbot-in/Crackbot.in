export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>

      <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

      {/* Hero */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex justify-center">

            <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur">
              PLATFORM STATUS • UNDER ACTIVE DEVELOPMENT
            </div>

          </div>

          <h1 className="text-center text-6xl font-black tracking-tight md:text-8xl">
            Crackbot
          </h1>

          <h2 className="mt-6 text-center text-2xl font-semibold text-zinc-300 md:text-4xl">
            Independent Cybersecurity Research Group
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-center text-lg leading-9 text-zinc-400">

            Crackbot conducts cybersecurity research, publishes technical
            analysis, develops security tools and shares actionable threat
            intelligence to help researchers, defenders and the broader
            security community.

          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            <a
              href="https://github.com/CrackB0t"
              target="_blank"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-4 transition hover:border-blue-500"
            >
              GitHub
            </a>

            <a
              href="mailto:admin@crackbot.in"
              className="rounded-xl bg-blue-600 px-8 py-4 font-medium transition hover:bg-blue-500"
            >
              Contact
            </a>

          </div>

          <div className="mt-24 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">

              <h3 className="mb-4 text-xl font-bold">
                Research
              </h3>

              <p className="text-zinc-400">
                Publish technical research, malware analysis, digital
                forensics, reverse engineering and vulnerability reports.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">

              <h3 className="mb-4 text-xl font-bold">
                Threat Intelligence
              </h3>

              <p className="text-zinc-400">
                Curated advisories, emerging threats, breach notifications,
                IOC collections and defensive intelligence.
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">

              <h3 className="mb-4 text-xl font-bold">
                Community
              </h3>

              <p className="text-zinc-400">
                Open collaboration, technical blogs, discussions,
                cybersecurity tools and knowledge sharing.
              </p>

            </div>

          </div>

          <div className="mx-auto mt-24 max-w-5xl rounded-2xl border border-zinc-800 bg-black/40 p-8 backdrop-blur">

            <div className="mb-4 text-sm text-green-400">
              system@crackbot:~$
            </div>

            <div className="space-y-3 font-mono text-sm text-zinc-300">

              <div> Platform Architecture Initialized</div>
              <div> Development Infrastructure Online</div>
              <div> GitHub & Vercel Connected</div>
              <div> Public Launch In Progress...</div>

            </div>

          </div>

          <footer className="mt-20 pb-12 text-center text-sm text-zinc-600">
            © {new Date().getFullYear()} Crackbot • Independent Cybersecurity Research Group
          </footer>

        </div>

      </section>

    </main>
  );
}