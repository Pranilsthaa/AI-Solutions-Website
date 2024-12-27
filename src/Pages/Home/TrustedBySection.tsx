const logos = [
  { name: "Company 1", src: "/image/client_logo_1.png" },
  { name: "Company 2", src: "/image/client_logo_2.jpg" },
  { name: "Company 3", src: "/image/client_logo_3.webp" },
  { name: "Company 4", src: "/image/client_logo_4.png" },
  { name: "Company 5", src: "/image/client_logo_5.png" },
  { name: "Company 6", src: "/image/client_logo_6.jpg" },
  { name: "Company 7", src: "/image/client_logo_7.png" },
  { name: "Company 8", src: "/image/client_logo_8.png" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-800 dark:text-gray-200">
          Trusted by Industry Leaders
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-slide">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-[150px] mx-8">
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={150}
                  height={80}
                  className="object-contain aspect-square"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
