import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Leadership from "@/components/Leadership";
import Image from "next/image";

export const metadata = {
    title: "About Us - Unique Tech Solution",
    description: "Learn about Unique Tech Solution's mission, vision, and the leadership driving innovation across our strategic business units.",
};

export default function AboutPage() {
    return (
        <>
            <Navigation/>
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
                                Unique Tech Solution was established in <strong>September 2024</strong> in the United
                                Kingdom with a clear mission: to democratize access to transformative AI and technology
                                solutions. As a strategic holding company, we unite four specialized business units
                                under one vision—delivering innovation that is accessible, secure, and ethical.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our portfolio spans diverse sectors: from AI-powered educational tools that reduce
                                teacher workload, to professional website development for small businesses, specialized
                                training programs in AI and financial technology, and enterprise-grade private AI
                                infrastructure that keeps data secure and compliant.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To democratize AI and technology solutions, making them accessible, secure, and ethical
                                for organizations of all sizes. We bridge the gap between cutting-edge research and
                                practical implementation, delivering measurable results while prioritizing data
                                protection, regulatory compliance, and genuine impact.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Vision</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We envision a future where transformative technology empowers, not complicates. Where
                                businesses can leverage AI with confidence, knowing their data is secure and their
                                investments deliver real value. Through responsible innovation and practical solutions,
                                we're building that future today.
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Core Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Innovation</h3>
                                    <p className="text-gray-700">
                                        Patent-pending AI technology and cutting-edge solutions that push the boundaries
                                        of what's possible.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Security</h3>
                                    <p className="text-gray-700">
                                        Data protection and compliance at our core—GDPR, PDPA-ready with bank-level
                                        security standards.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Accessibility</h3>
                                    <p className="text-gray-700">
                                        Making advanced technology available to organizations of all sizes, from
                                        startups to institutions.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3">Excellence</h3>
                                    <p className="text-gray-700">
                                        Academic rigor meets practical focus—delivering real-world applications with
                                        measurable results.
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
                            Looking ahead, Unique Tech Solution aims to expand our portfolio of innovative businesses
                            while
                            deepening our impact in existing markets. We envision a future where our SBUs are recognized
                            as
                            leaders in their respective fields, known for delivering cutting-edge solutions that make a
                            meaningful difference in people's lives.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We are committed to sustainable growth, fostering talent, and continuing to invest in
                            technologies
                            and strategies that will shape the future of business. Through strategic partnerships,
                            continuous
                            innovation, and unwavering dedication to excellence, we will build a legacy of success that
                            extends
                            far beyond our current achievements.
                        </p>
                    </div>
                </section>

                {/* Leadership Section */}
                <Leadership/>

                {/* Leadership Profiles */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership Profiles</h2>

                        {/* Dr. Sharzad Madjlesi */}
                        <div id="sharzad-madjlesi" className="mb-12 pb-12 border-b border-gray-200 scroll-mt-24">
                            <div className="flex items-start gap-6 mb-6">
                                <div
                                    className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-gray-200 shadow-lg relative">
                                    <Image
                                        src="/images/ceo.webp"
                                        alt="Dr. Sharzad Madjlesi"
                                        fill
                                        sizes="128px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Sharzad Madjlesi, PhD</h3>
                                    <p className="text-lg text-blue-900 font-semibold mb-2">Chief Executive Officer &
                                        Co-Founder</p>
                                    <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      PhD in Financial Technology
                    </span>
                                        <span
                                            className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      AI Research
                    </span>
                                        <span
                                            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Educational Innovation
                    </span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Dr. Sharzad Madjlesi founded Unique Tech Solution in the UK with a clear conviction:
                                    transformative technology should be accessible, secure, and ethical. As CEO, she
                                    leads a diverse portfolio of technology businesses united by this principle.
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    With a background spanning artificial intelligence research, educational innovation,
                                    and technology entrepreneurship, Dr. Sharzad brings a multidisciplinary perspective
                                    to leadership. Her career has been defined by bridging the gap between cutting-edge
                                    research and practical implementation, translating complex AI capabilities into
                                    solutions that serve real human needs.
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Her leadership philosophy centers on responsible innovation. Whether addressing
                                    challenges in education, business infrastructure, professional development, or
                                    enterprise AI, Dr. Sharzad ensures that every UTS solution prioritizes user privacy,
                                    regulatory compliance, and measurable impact. She believes technology companies have
                                    an obligation not just to innovate, but to innovate responsibly.
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Dr. Sharzad's expertise encompasses machine learning systems, digital transformation
                                    strategy, educational technology, and fintech innovation. She holds a PhD in
                                    Financial Technology and has worked extensively in both academic and commercial
                                    environments, giving her a unique ability to balance rigorous methodology with
                                    market realities.
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Beyond growing Unique Tech Solution's business portfolio, Dr. Sharzad is committed
                                    to fostering partnerships with academic institutions, maintaining ethical AI
                                    standards, and contributing to the broader conversation about technology's role in
                                    companies and society.
                                </p>
                            </div>
                        </div>

                        {/* Dr. Anand Mandal */}
                        <div id="anand-mandal" className="mb-12 pb-12 border-b border-gray-200 scroll-mt-24">
                            <div className="flex items-start gap-6 mb-6">
                                <div
                                    className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-gray-200 shadow-lg relative">
                                    <Image
                                        src="/images/cofounder.webp"
                                        alt="Dr. Anand Mandal"
                                        fill
                                        sizes="128px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Anand Mandal, PhD</h3>
                                    <p className="text-lg text-blue-900 font-semibold mb-2">Co-Founder and Director</p>
                                    <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      Associate Professor
                    </span>
                                        <span
                                            className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      Digital Finance Chair
                    </span>
                                        <span
                                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      UCL Blockchain Lab
                    </span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Dr. Anand Mandal is the Co-Founder of Unique Tech Solution, bringing a
                                    unique blend of academic rigor and practical financial technology expertise to the
                                    company's strategic direction. With a PhD in Probability Distribution Fitting from
                                    Cranfield University and master's degrees in Management Science and Finance &
                                    Investments, he bridges quantitative analysis with real-world business application.
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    At the University of Birmingham's Department of Finance, Dr. Mandal serves as
                                    Associate Professor in Finance, Scotcoin Distinguished Chair of Digital Finance, and
                                    Programme Director for the MBA (Distance Learning). Dr. Mandal operates at the
                                    intersection of academia and industry. This dual perspective enables him to identify
                                    emerging opportunities while understanding the practical constraints organizations
                                    face. 
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    His analytical approach ensures UTS solutions are built on solid mathematical and
                                    strategic foundations. Working alongside CEO Dr. Sharzad Madjlesi and CTO Mehran
                                    Gharooni, Dr. Mandal provides the strategic oversight and financial expertise that
                                    enables UTS to make informed decisions about technology investments and long-term
                                    growth. His commitment to sustainable finance and evidence-based innovation aligns
                                    perfectly with UTS's mission to deliver technology solutions that are as responsible
                                    as they are revolutionary.
                                </p>
                            </div>
                        </div>

                        {/* Mr. Mehran Gharooni */}
                        <div id="mehran-gharooni" className="mb-12 scroll-mt-24">
                            <div className="flex items-start gap-6 mb-6">
                                <div
                                    className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-gray-200 shadow-lg relative">
                                    <Image
                                        src="/images/cto.webp"
                                        alt="Mr. Mehran Gharooni"
                                        fill
                                        sizes="128px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Mr. Mehran Gharooni</h3>
                                    <p className="text-lg text-blue-900 font-semibold mb-2">Chief Technology Officer</p>
                                    <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      MSc Data Science
                    </span>
                                        <span
                                            className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      4.0 CGPA
                    </span>
                                        <span
                                            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      Patent-Pending AI
                    </span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Mehran Gharooni is the Chief Technology Officer at Unique Tech Solution, responsible
                                    for architecting the AI systems and technical infrastructure that power UTS's
                                    portfolio of innovative solutions. With a Master's in Data Science from the
                                    University of Malaya (4.0/4.0 CGPA), Mehran brings exceptional expertise in
                                    artificial intelligence, machine learning, and full-stack system development.
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    As co-inventor of UTS's patent-pending AI consensus technology, Mehran has pioneered
                                    novel approaches to building trustworthy, verifiable AI systems. His technical
                                    leadership encompasses advanced machine learning, natural language processing,
                                    computer vision, cloud architecture, and enterprise system design. From backend APIs
                                    to frontend interfaces, Mehran ensures every UTS solution meets the highest
                                    standards of performance, security, and user experience.
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    His work combines academic rigor with practical engineering excellence, delivering
                                    AI systems that are both cutting-edge and reliable. Mehran's research has been
                                    published in technical conferences, and his production systems serve hundreds of
                                    users across educational and enterprise environments.
                                </p>

                                <p className="text-gray-700 leading-relaxed mb-4">
                                    At UTS, Mehran's mission is clear: build AI that organizations can trust—powerful
                                    enough to transform workflows, yet transparent and secure enough to deploy with
                                    confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Partner With Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div
                                    className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
                                <p className="text-gray-600">
                                    Years of experience building and scaling successful businesses across multiple
                                    sectors.
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Leadership</h3>
                                <p className="text-gray-600">
                                    Led by seasoned professionals with deep industry knowledge and strategic vision.
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor"
                                         viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
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
            <Footer/>
        </>
    );
}
