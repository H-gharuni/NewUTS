import Link from "next/link";

const businessUnits = [
  {
    name: "MySmartTeach",
    tagline: "AI-Powered Teaching Assistant",
    description: "Revolutionary AI platform helping UK teachers automate assessment marking and reduce workload by 40%. Patent-pending technology trusted by schools nationwide.",
    website: "https://mysmartteach.com",
    color: "from-green-500 to-emerald-600",
    comingSoon: false
  },
  {
    name: "Tennerpages",
    tagline: "Professional Websites Made Simple",
    description: "Launch your business online in just 48 hours. Professional websites at £10/page/month - no technical skills required. Trusted by 50+ businesses worldwide.",
    website: "https://tennerpages.com",
    color: "from-purple-500 to-indigo-600",
    comingSoon: false
  },
  {
    name: "UTS Training Academy",
    tagline: "AI & FinTech Upskilling",
    description: "Comprehensive training programs in AI, financial technology, blockchain, and data science. Flexible learning designed for busy professionals who want to excel in modern finance and tech.",
    website: "https://teachaitools.com",
    color: "from-blue-600 to-indigo-700",
    comingSoon: false
  },
  {
    name: "Private AI Solutions",
    tagline: "Enterprise AI On Your Infrastructure",
    description: "Deploy secure, GDPR/PDPA-compliant AI on YOUR servers. Bank-level security with fixed costs. No data sent overseas. Proven with institutions like University of Nottingham Malaysia.",
    website: "/private-ai",
    color: "from-orange-500 to-red-600",
    comingSoon: false
  }
];

export default function BusinessUnits() {
  return (
    <section id="business-units" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Strategic Business Units
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions across multiple sectors, unified by excellence and driven by vision.
          </p>
        </div>

        {/* Business Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {businessUnits.map((unit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Colored Header */}
              <div className={`h-2 bg-gradient-to-r ${unit.color}`}></div>

              <div className="p-8">
                {/* SBU Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {unit.name}
                </h3>

                {/* Tagline */}
                {unit.tagline && (
                  <p className={`text-sm font-semibold bg-gradient-to-r ${unit.color} bg-clip-text text-transparent mb-4`}>
                    {unit.tagline}
                  </p>
                )}

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {unit.description}
                </p>

                {/* CTA Button */}
                {!unit.comingSoon ? (
                  <a
                    href={unit.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center bg-gradient-to-r ${unit.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}
                  >
                    Visit Website
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center bg-gray-200 text-gray-600 px-6 py-3 rounded-lg font-semibold cursor-not-allowed">
                    Coming Soon
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
