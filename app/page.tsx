import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BusinessUnits from "@/components/BusinessUnits";
import Leadership from "@/components/Leadership";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BusinessUnits />
        <Leadership />

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600">
                Have a question or want to learn more? We'd love to hear from you.
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
