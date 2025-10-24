import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Leadership from "@/components/Leadership";

export const metadata = {
  title: "About Us - Unique Tech Solution",
  description: "Learn about Unique Tech Solution's mission, vision, and the leadership driving innovation across our strategic business units.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Unique Tech Solution
            </h1>
            <p className="text-xl text-blue-100">
              Building tomorrow's solutions through innovation, expertise, and strategic vision.
            </p>
          </div>
        </section>

        {/* Company History & Mission */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Unique Tech Solution was founded with a singular vision: to create a portfolio of innovative
                businesses that address real-world challenges through technology and strategic thinking. As a
                semi-holding company, we provide the framework, resources, and expertise that enable our Strategic
                Business Units (SBUs) to thrive independently while benefiting from our collective strength.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We are committed to fostering innovation and excellence across diverse sectors. Our mission is to
                empower our business units with strategic guidance, operational support, and a shared culture of
                innovation, enabling them to deliver exceptional value to their customers and stakeholders.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Innovation</h3>
                  <p className="text-gray-700">
                    We constantly push boundaries and embrace new technologies to stay ahead of the curve.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Excellence</h3>
                  <p className="text-gray-700">
                    We maintain the highest standards in everything we do, from product development to customer service.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Integrity</h3>
                  <p className="text-gray-700">
                    We operate with transparency, honesty, and ethical principles in all our business dealings.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Collaboration</h3>
                  <p className="text-gray-700">
                    We believe in the power of teamwork and synergy across our business units.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision for the Future */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision for the Future</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Looking ahead, Unique Tech Solution aims to expand our portfolio of innovative businesses while
              deepening our impact in existing markets. We envision a future where our SBUs are recognized as
              leaders in their respective fields, known for delivering cutting-edge solutions that make a
              meaningful difference in people's lives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to sustainable growth, fostering talent, and continuing to invest in technologies
              and strategies that will shape the future of business. Through strategic partnerships, continuous
              innovation, and unwavering dedication to excellence, we will build a legacy of success that extends
              far beyond our current achievements.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <Leadership />

        {/* Leadership Profiles */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Profiles</h2>

            {/* Dr. Sharzad Madjlesi */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  SM
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Sharzad Madjlesi</h3>
                  <p className="text-lg text-blue-900 font-semibold mb-2">Co-Founder and CEO</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      PhD in Business & Management
                    </span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      MBA with Distinction
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      FinTech Specialist
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Sharzad Madjlesi leads Unique Tech Solution with a results-driven approach, focusing on
                  delivering customized digital solutions that empower businesses and enhance their competitive edge.
                  With a PhD in Business and Management specializing in FinTech, and an MBA with distinction, both
                  from the University of Nottingham, she brings deep expertise in financial technology, consulting,
                  and business management.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Madjlesi's research into financial institutions, credit risk, and performance metrics enables
                  the development of transformative, data-driven solutions tailored to clients' needs. Her
                  entrepreneurial experience and leadership roles, including over a decade of financial management
                  and consulting positions, provide a strong foundation for addressing complex business challenges
                  with cost-effective, practical strategies.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  As a member of the Ingenuity Lab at the University of Nottingham, Dr. Madjlesi is dedicated to
                  fostering innovation in Financial Technologies and empowering businesses through comprehensive
                  training programs. Her academic excellence and real-world expertise ensure that every solution
                  aligns seamlessly with operational goals in today's fast-evolving digital economy.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• PhD in Business & Management (FinTech)</li>
                      <li>• MBA with Distinction</li>
                      <li>• University of Nottingham</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Financial Technology (FinTech)</li>
                      <li>• Credit Risk & Performance Metrics</li>
                      <li>• Business Consulting & Strategy</li>
                      <li>• Digital Transformation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dr. Anand Mandal */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  AM
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Anand Mandal</h3>
                  <p className="text-lg text-blue-900 font-semibold mb-2">Co-Founder and Director</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      PhD in Probability Distribution
                    </span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      MSc Management Science
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      MSc Finance & Investments
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      AI & Blockchain Expert
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Anand Mandal is a distinguished expert in AI-driven strategic investments, blockchain
                  consulting, and advanced machine learning. He holds a PhD in Probability Distribution Fitting from
                  Cranfield University and master's degrees in Management Science and Finance & Investments, blending
                  academic excellence with practical expertise.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  As an Associate Professor and Distinguished Chair of Digital Finance at the University of Birmingham,
                  Dr. Mandal directs the MSc Financial Technology program, where he develops innovative, client-focused
                  solutions. His collaboration with the Association of Corporate Treasurers has led to the creation of
                  ESG-focused curriculums, underscoring his dedication to advancing sustainable finance.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Dr. Mandal's expertise includes cryptocurrency markets, blockchain technology, financial strategy,
                  and risk management. He has provided guidance to organizations like the NHS and the UK government and
                  secured over £2 million in funding for pioneering AI and healthcare projects. An honorary member of
                  UCL's Blockchain Lab, he is celebrated for his data-driven approach, making him a trusted leader in
                  the digital finance industry.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• PhD in Probability Distribution Fitting</li>
                      <li>• MSc in Management Science</li>
                      <li>• MSc in Finance & Investments</li>
                      <li>• Cranfield University</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• AI-Driven Strategic Investments</li>
                      <li>• Blockchain Consulting</li>
                      <li>• Cryptocurrency Markets</li>
                      <li>• Financial Strategy & Risk Management</li>
                      <li>• ESG & Sustainable Finance</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Current Roles</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Associate Professor, University of Birmingham</li>
                      <li>• Distinguished Chair of Digital Finance</li>
                      <li>• Director, MSc Financial Technology Program</li>
                      <li>• Honorary Member, UCL Blockchain Lab</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Secured £2M+ in AI & Healthcare funding</li>
                      <li>• Advisor to NHS & UK Government</li>
                      <li>• ESG Curriculum Development (ACT)</li>
                      <li>• Blockchain Lab Honorary Member (UCL)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder for other leadership profiles */}
            <div className="text-center text-gray-500 italic">
              Additional leadership profiles coming soon
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Partner With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                <p className="text-gray-600">
                  Years of experience building and scaling successful businesses across multiple sectors.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Leadership</h3>
                <p className="text-gray-600">
                  Led by seasoned professionals with deep industry knowledge and strategic vision.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Commitment to Quality</h3>
                <p className="text-gray-600">
                  Unwavering dedication to delivering excellence in every project and partnership.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
