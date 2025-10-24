import Link from "next/link";
import Image from "next/image";

const leaders = [
  {
    name: "Dr Sharzad Madjlesi",
    role: "Co-Founder and CEO",
    image: "/images/ceo.webp", // Also supports .jpg, .png
    profileLink: "/about#sharzad-madjlesi"
  },
  {
    name: "Dr Anand Mandal",
    role: "Co-Founder and Director",
    image: "/images/cofounder.webp", // Also supports .jpg, .png
    profileLink: "/about#anand-mandal"
  },
  {
    name: "Mr Mehran Gharooni",
    role: "Chief Technology Officer",
    image: "/images/cto.webp", // Also supports .jpg, .png
    profileLink: null // No profile yet
  }
];

export default function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Driving Force
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leadership guiding our strategic direction and fostering innovation.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {leaders.map((leader, index) => {
            const content = (
              <>
                {/* Image Container - 3D Square */}
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-lg overflow-hidden bg-gray-200 shadow-xl group-hover:shadow-2xl transition-all transform perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none z-10"></div>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="192px"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  {leader.role}
                </p>
                {leader.profileLink && (
                  <span className="inline-flex items-center text-blue-900 text-sm font-semibold group-hover:underline">
                    View Full Profile
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </>
            );

            if (leader.profileLink) {
              return (
                <Link
                  key={index}
                  href={leader.profileLink}
                  className="text-center group cursor-pointer block hover:scale-105 transition-transform"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div key={index} className="text-center group">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
