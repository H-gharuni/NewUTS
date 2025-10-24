import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Unique Tech Solution",
  description: "Privacy Policy for Unique Tech Solution",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-8">Last updated: October 24, 2025</p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                Unique Tech Solution UK ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                website uniquetechsolution.uk.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the
                website includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, and other contact information you voluntarily
                  provide when you contact us through our contact form.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers automatically collect when you access the
                  website, such as your IP address, browser type, operating system, access times, and pages viewed.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Your Information</h2>
              <p className="text-gray-700 mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and
                customized experience. Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Respond to your inquiries and contact requests</li>
                <li>Send you administrative information, such as updates to our terms and policies</li>
                <li>Improve our website and services</li>
                <li>Monitor and analyze usage and trends to improve your experience</li>
                <li>Prevent fraudulent transactions and monitor against theft</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-700 mb-6">
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary
                  to respond to legal process, to investigate or remedy potential violations of our policies, or to
                  protect the rights, property, and safety of others.
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or
                  during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                  portion of our business to another company.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Security of Your Information</h2>
              <p className="text-gray-700 mb-6">
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie Policy</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze site
                usage. Cookies are small text files stored on your device that help us provide and improve our services.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Types of Cookies We Use</h3>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Necessary Cookies</h4>
                <p className="text-gray-700 mb-2">
                  These cookies are essential for the website to function properly. They enable core functionality such
                  as security, network management, and accessibility. These cookies cannot be disabled.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>Cookie consent preferences</li>
                  <li>Session management</li>
                  <li>Security features</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                <p className="text-gray-700 mb-2">
                  These cookies help us understand how visitors interact with our website by collecting and reporting
                  information anonymously. We use this data to improve our website and services.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>Google Analytics (if enabled)</li>
                  <li>Page view statistics</li>
                  <li>User behavior patterns</li>
                  <li>Traffic sources</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                <p className="text-gray-700 mb-2">
                  These cookies track your online activity to help advertisers deliver more relevant advertising or to
                  limit how many times you see an advertisement. These cookies are optional.
                </p>
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>Advertising preferences</li>
                  <li>Retargeting campaigns</li>
                  <li>Social media integration</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Managing Your Cookie Preferences</h3>
              <p className="text-gray-700 mb-4">
                You have the right to decide whether to accept or reject cookies. When you first visit our website,
                you will be presented with a cookie consent banner where you can choose to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject all non-essential cookies</li>
                <li>Customize your cookie preferences</li>
              </ul>
              <p className="text-gray-700 mb-4">
                You can also set your browser to refuse all or some browser cookies, or to alert you when websites set
                or access cookies. If you disable or refuse cookies, please note that some parts of this website may
                become inaccessible or not function properly.
              </p>
              <p className="text-gray-700 mb-6">
                To change your cookie preferences at any time, you can clear your browser's local storage or revisit
                the cookie consent banner by clearing your cookies and refreshing the page.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights (GDPR)</h2>
              <p className="text-gray-700 mb-4">
                If you are a resident of the European Economic Area (EEA) or United Kingdom, you have certain data
                protection rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>The right to access, update, or delete your personal information</li>
                <li>The right to rectification</li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have questions or comments about this Privacy Policy, please contact us at:
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
