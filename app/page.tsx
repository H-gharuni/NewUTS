import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import BusinessUnits from "@/components/BusinessUnits";
import WhyChooseUTS from "@/components/WhyChooseUTS";
import MarketPresence from "@/components/MarketPresence";
import Leadership from "@/components/Leadership";
import SuccessMetrics from "@/components/SuccessMetrics";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CompanyIntro />
        <BusinessUnits />
        <WhyChooseUTS />
        <MarketPresence />
        <Leadership />
        <SuccessMetrics />

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Organization with AI?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Explore our solutions or get in touch to discuss your needs
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <ContactForm variant="simple" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
