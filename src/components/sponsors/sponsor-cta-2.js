export default function SponsorCTA2() {
    return (
      <div className="bg-white">
        <div className="py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
          <div className="relative px-6 pt-16 overflow-hidden bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16 md:pt-24 lg:pl-24 lg:pr-0 lg:pt-0 lg:flex lg:items-center lg:justify-between">
            {/* Gradient Background */}
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 transform-gpu [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#gradient)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#1E3A8A" />
                </radialGradient>
              </defs>
            </svg>
  
            {/* Text Content */}
            <div className="max-w-md mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Boost your visibility at WRI. Sign up as a sponsor today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                With two new conferences for 2025, we believe this division will
                provide an enriched experience for all participants, allowing for
                deeper insights, targeted discussions, and enhanced networking
                opportunities.
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6 lg:justify-start">
                <a
                  href="https://cvent.me/DeeEKR"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                  Sponsor Registration
                </a>
                <a
                  href="WRI-2025-Sponsorship-Kit.pdf"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Download PDF with details <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
  
            {/* Image */}
            <div className="relative mt-16 lg:mt-0 lg:flex-shrink-0">
              <img
                alt="App screenshot"
                src="sponsor-cta-2-image.png"
                className="w-full max-w-[110%] rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }