import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - Unique Tech Solution",
  description: "Terms of Service for Unique Tech Solution",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-sm text-gray-600 mb-8">Last updated: October 24, 2025</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing or using the website uniquetechsolution.uk ("Website"), you agree to be bound by these
                Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the
                Website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily access the materials (information or software) on Unique Tech
                Solution UK's Website for personal, non-commercial viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the Website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700 mb-6">
                The Website and its original content, features, and functionality are and will remain the exclusive
                property of Unique Tech Solution UK and its licensors. The Website is protected by copyright,
                trademark, and other laws. Our trademarks and trade dress may not be used in connection with any
                product or service without our prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer</h2>
              <p className="text-gray-700 mb-6">
                The materials on Unique Tech Solution UK's Website are provided on an "as is" basis. Unique Tech
                Solution UK makes no warranties, expressed or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or conditions of merchantability, fitness
                for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitations</h2>
              <p className="text-gray-700 mb-6">
                In no event shall Unique Tech Solution UK or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on Unique Tech Solution UK's Website, even if Unique Tech
                Solution UK or a Unique Tech Solution UK authorized representative has been notified orally or in
                writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Accuracy of Materials</h2>
              <p className="text-gray-700 mb-6">
                The materials appearing on Unique Tech Solution UK's Website could include technical, typographical, or
                photographic errors. Unique Tech Solution UK does not warrant that any of the materials on its Website
                are accurate, complete, or current. Unique Tech Solution UK may make changes to the materials contained
                on its Website at any time without notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Links</h2>
              <p className="text-gray-700 mb-6">
                Unique Tech Solution UK has not reviewed all of the sites linked to its Website and is not responsible
                for the contents of any such linked site. The inclusion of any link does not imply endorsement by
                Unique Tech Solution UK of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h2>
              <p className="text-gray-700 mb-6">
                Unique Tech Solution UK may revise these Terms of Service for its Website at any time without notice.
                By using this Website, you are agreeing to be bound by the then current version of these Terms of
                Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without
                regard to its conflict of law provisions. Any disputes relating to these terms will be subject to the
                exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Unique Tech Solution UK</strong><br />
                  C16, The Ingenuity Centre<br />
                  Innovation Park<br />
                  Nottingham, United Kingdom<br />
                  <br />
                  Email: <a href="mailto:info@uniquetechsolution.uk" className="text-blue-900 hover:underline">info@uniquetechsolution.uk</a><br />
                  Phone: <a href="tel:+447405317234" className="text-blue-900 hover:underline">+44 74 0531 7234</a>
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
