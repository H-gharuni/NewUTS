import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-dbg.svg"
                alt="Unique Tech Solution"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h3 className="text-xl font-bold">Unique Tech Solution</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering innovation through strategic business solutions and technology excellence.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+442074310531" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span>📞</span> +44 74 0531 7234
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/unique-tech-solution-uk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span>🔗</span> Unique Tech Solution UK
                </a>
              </li>
              <li>
                <a href="https://wa.me/447917990905" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span>💬</span> +44 79 1799 0905
                </a>
              </li>
              <li>
                <a href="mailto:info@uniquetechsolution.uk" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                  <span>✉️</span> info@uniquetechsolution.uk
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2 mt-4">
                <span>📍</span>
                <span>C16, The Ingenuity Centre, Innovation Park, Nottingham, the UK</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Unique Tech Solution. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
