import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Private AI Infrastructure | Unique Tech Solution",
  description: "AI Power. Bank-Level Security. Fixed Costs. Deploy secure AI on YOUR servers with complete PDPA compliance.",
};

export default function PrivateAIPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                PRIVATE AI ON YOUR INFRASTRUCTURE
              </h1>
              <p className="text-2xl sm:text-3xl text-blue-100 mb-4 font-semibold">
                AI Power. Bank-Level Security. Fixed Costs.
              </p>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Your Data Never Leaves Malaysia.
              </p>
            </div>
          </div>
        </section>

        {/* AI is No Longer Optional vs Public AI is Risky */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - AI is No Longer Optional */}
              <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  AI IS NO LONGER OPTIONAL
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">Most staff already use it</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">Competitors are adopting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">Productivity gains of 40% +</span>
                  </li>
                </ul>
              </div>

              {/* Right Column - But Public AI is Risky */}
              <div className="bg-red-50 rounded-xl p-8 border-2 border-red-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  BUT PUBLIC AI IS RISKY
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700 text-lg">Data sent overseas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700 text-lg">PDPA violations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700 text-lg">Unpredictable costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700 text-lg">No control over access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Hidden Cost of 'Free' AI */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-500">
              <h2 className="text-3xl font-bold text-red-600 text-center mb-6">
                THE HIDDEN COST OF 'FREE' AI
              </h2>
              <p className="text-center text-gray-700 text-lg mb-8">
                When your team uploads sensitive data to ChatGPT or Claude:
              </p>

              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-gray-700 font-medium">- Where does it go?</span>
                  <span className="text-gray-900 font-bold">(Overseas data centers)</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-gray-700 font-medium">- Who can access it?</span>
                  <span className="text-gray-900 font-bold">(You don't <span className="text-red-600">control</span> this)</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <span className="text-gray-700 font-medium">- What does it cost?</span>
                  <span className="text-gray-900 font-bold">(Bills can hit RM10,000+/month)</span>
                </div>
              </div>

              <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-gray-900 font-bold text-lg">
                  Malaysian companies face PDPA penalties up to RM500,000.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution: Private AI Engine */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                OUR SOLUTION: PRIVATE AI ENGINE
              </h2>
              <p className="text-xl text-blue-600 font-semibold">
                We Deploy Secure AI on YOUR Servers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Features */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Top <strong>open-source</strong> models</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">(GPT-oss: 120b, Qwen3, Llama 4)</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">User-friendly web portal</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Complete <strong>admin control panel</strong></span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-lg">Single Sign-On (SSO) integration</span>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">Full audit trails for compliance</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">Fixed annual cost - no surprises</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg"><strong>PDPA-ready</strong> documentation</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-lg">Training AI on <strong>YOUR documents</strong></span>
                  </div>
                </div>
              </div>

              {/* Right Column - Screenshot Placeholder */}
              <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
                <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-gray-300">
                  <p className="text-gray-500 text-center px-4">
                    [Admin Control Panel Screenshot]
                    <br />
                    <span className="text-sm">User-friendly interface with complete control</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 text-lg italic">
                Not just software - we provide custom security architecture, PDPA compliance packages, ongoing support & model updates
              </p>
            </div>
          </div>
        </section>

        {/* Proven in Malaysia */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                PROVEN IN MALAYSIA
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Stats */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">-</span>
                  <span className="text-gray-700 text-lg">Successfully deployed at University of Nottingham Malaysia</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">-</span>
                  <span className="text-gray-700 text-lg">100+ researchers using it daily</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">-</span>
                  <span className="text-gray-700 text-lg">Secure access to multiple LLM models</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 text-lg">-</span>
                  <span className="text-gray-700 text-lg">Deployed in 6 weeks</span>
                </div>
              </div>

              {/* Right Column - Testimonial */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-blue-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "UTS's private AI system gave us the control and security we needed to protect our research data."
                </p>
                <p className="text-gray-900 font-semibold">
                  - Technical Manager, University of Nottingham Malaysia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready for a Free Pilot */}
        <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              READY FOR A FREE PILOT?
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-xl">
                <strong>WhatsApp:</strong> +60 19-452 0530
              </p>
              <p className="text-xl">
                <strong>Email:</strong> mehran@uniquetechsolution.uk
              </p>
              <p className="text-xl">
                <strong>LinkedIn:</strong> linkedin.com/in/mehran-gharooni
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
