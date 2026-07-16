import React from "react";

function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500"></div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Alex Rivera
            </h1>
          </div>

          <div className="flex items-center gap-9 text-sm">
            <a href="/home" className="hover:text-violet-400 transition">
              home
            </a>
            <a
              href="/conditional-rendring"
              className="hover:text-violet-400 transition"
            >
              conditional-rendring
            </a>
            <a href="/about-us" className="hover:text-violet-400 transition">
              about-us
            </a>
            <a
              href="/listing"
              className="px-5 py-2 rounded-full border border-zinc-700 hover:bg-white hover:text-zinc-950 transition text-sm"
            >
              listing
            </a>

            <a
              href="/useref"
              className="px-5 py-2 rounded-full border border-zinc-700 hover:bg-white hover:text-zinc-950 transition text-sm"
            >
              useref
            </a>

            <a
              href="/usecontext"
              className="px-5 py-2 rounded-full border border-zinc-700 hover:bg-white hover:text-zinc-950 transition text-sm"
            >
              usecontext
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                Available for freelance — 2026
              </div>
            </div>

            <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter leading-none">
              I dont dont do any
              <br />
              experiences that
              <br />
              feel alive.
            </h1>

            <p className="mt-6 text-xl text-zinc-400 max-w-md">
              Product designer and Webflow developer helping teams build
              beautiful, high-performing websites.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="#work"
                className="px-8 py-4 rounded-2xl bg-white text-zinc-950 font-medium hover:bg-zinc-100 transition"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-20 px-6 border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-violet-400 text-sm tracking-[3px] font-medium">
                SELECTED WORK
              </div>
              <h2 className="text-5xl font-semibold tracking-tight mt-2">
                Recent Projects
              </h2>
            </div>
            <a
              href="#"
              className="text-zinc-400 hover:text-white flex items-center gap-2 group"
            >
              All projects{" "}
              <span className="group-hover:translate-x-0.5 transition">→</span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-video rounded-3xl bg-zinc-900 mb-6 overflow-hidden border border-zinc-800">
                <img
                  src="[picsum.photos](https://picsum.photos/id/1015/800/450)"
                  alt="Finora"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-2xl font-semibold group-hover:text-violet-400 transition">
                    Finora
                  </h3>
                  <p className="text-zinc-400">Financial platform • 2025</p>
                </div>
                <div className="text-sm text-right text-zinc-500">
                  Branding, UI/UX, Webflow
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="aspect-video rounded-3xl bg-zinc-900 mb-6 overflow-hidden border border-zinc-800">
                <img
                  src="[picsum.photos](https://picsum.photos/id/1005/800/450)"
                  alt="Lumina"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-2xl font-semibold group-hover:text-violet-400 transition">
                    Lumina
                  </h3>
                  <p className="text-zinc-400">Creative agency site • 2025</p>
                </div>
                <div className="text-sm text-right text-zinc-500">
                  Design system, Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 bg-zinc-900/50 border-y border-zinc-800"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-12 gap-x-12 gap-y-8 items-center">
            <div className="md:col-span-5">
              <h2 className="text-6xl font-semibold tracking-tighter leading-none">
                About me
              </h2>
            </div>

            <div className="md:col-span-7 text-lg text-zinc-300 space-y-6">
              <p>
                I'm a product designer and frontend developer based in Mumbai. I
                help ambitious founders and teams create digital products that
                are both beautiful and effective.
              </p>
              <p>
                With a focus on intentional design and thoughtful interactions,
                I build experiences that feel natural and human.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="text-zinc-500 mb-1">Currently</div>
              <div>Design Lead @ Arc Studio</div>
            </div>
            <div>
              <div className="text-zinc-500 mb-1">Previously</div>
              <div>Framer • Webflow • IDEO</div>
            </div>
            <div>
              <div className="font-medium">Featured in</div>
              <div className="text-zinc-400">AWWWARDS • CSS Design Awards</div>
            </div>
            <div>
              <div className="font-medium">Clients</div>
              <div className="text-zinc-400">
                Stripe • Vercel • Notion • Figma
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-6xl font-semibold tracking-tighter">
            Let’s create something
            <br />
            beautiful together.
          </h2>

          <p className="mt-6 text-xl text-zinc-400">
            Currently open to select projects and collaborations.
          </p>

          <div className="mt-10">
            <a
              href="mailto:hello@alexrivera.design"
              className="inline-block bg-white text-zinc-950 px-9 py-4 rounded-2xl font-medium hover:bg-zinc-100 transition"
            >
              Email me
            </a>
          </div>

          <div className="mt-8 text-sm text-zinc-500">
            Or find me on{" "}
            <a href="#" className="hover:text-white underline">
              Twitter
            </a>
            ,{" "}
            <a href="#" className="hover:text-white underline">
              LinkedIn
            </a>
            , or{" "}
            <a href="#" className="hover:text-white underline">
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Alex Rivera. All rights reserved.
      </footer>
    </div>
  );
}

export default PortfolioLanding;
