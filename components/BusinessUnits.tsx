import Link from "next/link";

const businessUnits = [
  {
    name: "mySmartTeach.com",
    description: "Revolutionizing education through innovative digital learning platforms and smart teaching solutions.",
    website: "https://mysmartteach.com",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Tennerpages.com",
    description: "Connecting communities with comprehensive local business directories and digital marketplace solutions.",
    website: "https://tennerpages.com",
    color: "from-purple-500 to-indigo-600"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {unit.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {unit.description}
                </p>

                {/* CTA Button */}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
