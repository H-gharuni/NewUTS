import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Success Stories | Unique Tech Solution",
  description: "Real-world impact across education, enterprise AI, web development, and professional training.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-blue-100">
              Real-world impact across education, enterprise, and digital transformation
            </p>
          </div>
        </section>

        {/* University of Nottingham Malaysia - Private AI */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">Private AI Solutions</h2>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border-2 border-orange-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                University of Nottingham Malaysia: Secure AI Infrastructure
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Researchers Using AI Daily</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">6 Weeks</div>
                  <div className="text-sm text-gray-600">Deployment Timeline</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">PDPA Compliant</div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Challenge:</strong> The University of Nottingham Malaysia needed a secure AI solution that would give their researchers access to powerful language models without sending sensitive research data overseas or violating PDPA regulations.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Solution:</strong> We deployed a comprehensive Private AI infrastructure on the university's own servers, featuring multiple open-source LLM models (GPT-oss, Qwen3, Llama 4), a user-friendly web portal, complete admin control panel, and Single Sign-On integration with their existing systems.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Results:</strong> Within 6 weeks, over 100 researchers gained access to secure AI capabilities. All data remains in Malaysia, full audit trails ensure compliance, and the university has complete control over access and usage. The fixed annual cost model eliminated budget uncertainty.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mt-6">
                  <p className="text-gray-800 italic text-lg">
                    "UTS's private AI system gave us the control and security we needed to protect our research data."
                  </p>
                  <p className="text-gray-700 font-semibold mt-3">
                    - Technical Manager, University of Nottingham Malaysia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MySmartTeach - Education */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">MySmartTeach - Education Technology</h2>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Transforming UK Teacher Workload Through AI
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">600+</div>
                  <div className="text-sm text-gray-600">UK Schools Surveyed</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Workload Reduction</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-green-600 mb-2">Patent</div>
                  <div className="text-sm text-gray-600">Pending AI Technology</div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Challenge:</strong> UK teachers face overwhelming workloads, spending countless hours on assessment marking and administrative tasks, leaving less time for actual teaching and student interaction.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Solution:</strong> We developed MySmartTeach, an AI-powered teaching assistant that automates assessment marking while maintaining pedagogical quality. Our patent-pending technology was developed based on input from over 600 UK schools, ensuring it addresses real teacher needs.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Results:</strong> Teachers using MySmartTeach report 40% reduction in marking time, allowing them to focus on lesson planning and student engagement. The platform maintains high marking standards while dramatically improving efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tennerpages - Web Development */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">Tennerpages - Website Development</h2>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border-2 border-purple-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Empowering 50+ Businesses to Go Digital
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Websites Launched</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">48 Hours</div>
                  <div className="text-sm text-gray-600">Launch Timeline</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-3xl font-bold text-purple-600 mb-2">£10/page</div>
                  <div className="text-sm text-gray-600">Monthly Cost</div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Challenge:</strong> Small businesses struggle with the cost and complexity of establishing professional web presence, often deterred by high upfront costs and technical requirements.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Solution:</strong> Tennerpages offers professional website development at just £10 per page per month, with no technical skills required. Businesses can launch their online presence in as little as 48 hours with ongoing support and hosting included.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Results:</strong> Over 50 businesses worldwide have launched professional websites through Tennerpages, gaining digital presence without breaking the bank. Our clients range from local service providers to international consultancies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UTS Training Academy */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-12 bg-gradient-to-b from-blue-600 to-indigo-700 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">UTS Training Academy</h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-2 border-blue-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Upskilling Professionals in AI & FinTech
              </h3>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Mission:</strong> Providing comprehensive training programs in artificial intelligence, financial technology, blockchain, and data science for busy professionals who want to excel in modern finance and technology.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Approach:</strong> Our training combines academic rigor with practical application. Led by PhD-qualified instructors with real-world experience, courses are designed to be flexible and accessible while maintaining high educational standards.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Impact:</strong> Professionals gain cutting-edge skills in emerging technologies, enabling career advancement and organizational transformation. Our curriculum reflects the latest developments in AI and fintech, taught by experts actively working in these fields.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our solutions can transform your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact Us Today
              </Link>
              <Link
                href="/#business-units"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
