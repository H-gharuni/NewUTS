export default function CompanyIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">
            Unique Tech Solution was established in <strong>September 2024</strong> in the United Kingdom as a strategic holding company with a clear mission: to democratize access to transformative AI and technology solutions. We unite four specialized business units under one vision—delivering innovation that is accessible, secure, and ethical.
          </p>

          <p className="text-lg leading-relaxed">
            Our portfolio spans diverse sectors: from <strong>AI-powered educational tools</strong> that reduce teacher workload, to <strong>professional website development</strong> for small businesses, <strong>specialized training programs</strong> in AI and financial technology, and <strong>enterprise-grade private AI infrastructure</strong> that keeps data secure and compliant.
          </p>

          <p className="text-lg leading-relaxed">
            Led by experienced founders with deep roots in both <strong>academic research and industry</strong>, we combine rigorous methodology with practical market understanding. Our multidisciplinary expertise encompasses artificial intelligence, educational innovation, financial technology, and enterprise solutions—enabling us to identify real-world challenges and deliver measurable results.
          </p>

          <p className="text-lg leading-relaxed">
            What sets us apart is our commitment to <strong>responsible innovation</strong>. Whether we're helping UK teachers automate assessment marking, enabling Malaysian institutions to deploy secure AI systems, or training professionals in cutting-edge fintech—we prioritize data protection, regulatory compliance, and genuine impact. Technology should empower, not complicate.
          </p>

          <p className="text-lg leading-relaxed font-semibold text-gray-900">
            At Unique Tech Solution, we don't just build technology. We build trust.
          </p>
        </div>
      </div>
    </section>
  );
}
