export default function MarketPresence() {
  const markets = [
    {
      region: "United Kingdom",
      flag: "🇬🇧",
      focus: ["Education (MySmartTeach)", "Web Development (Tennerpages)", "Training Programs"],
      status: "Primary Market"
    },
    {
      region: "Malaysia",
      flag: "🇲🇾",
      focus: ["Private AI Solutions", "Training Programs", "University Partnerships"],
      status: "Growing Market"
    },
    {
      region: "Global",
      flag: "🌍",
      focus: ["Web Development", "Online Training", "Remote AI Consulting"],
      status: "Expanding Reach"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving clients across multiple markets with localized expertise and global standards
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors">
              {/* Flag & Region */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{market.flag}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {market.region}
                </h3>
                <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {market.status}
                </span>
              </div>

              {/* Focus Areas */}
              <div className="space-y-3">
                {market.focus.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
