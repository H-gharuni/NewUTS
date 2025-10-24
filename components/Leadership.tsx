const leaders = [
  {
    name: "Dr Sharzad Madjlesi",
    role: "Co-Founder and CEO",
    image: "/images/ceo.jpg"
  },
  {
    name: "Dr Anand Mandal",
    role: "Co-Founder and Director",
    image: "/images/cofounder.jpg"
  },
  {
    name: "Mr Mehran Gharooni",
    role: "Chief Technology Officer",
    image: "/images/cto.jpg"
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
          {leaders.map((leader, index) => (
            <div key={index} className="text-center group">
              {/* Image Container */}
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden bg-gray-200 shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-5xl font-bold">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                {/* When you add actual images, uncomment this:
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
                */}
              </div>

              {/* Name and Role */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {leader.name}
              </h3>
              <p className="text-gray-600 font-medium">
                {leader.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
