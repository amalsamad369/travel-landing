import React from "react";
import Hero from "./components/Hero";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function App() {
  const destinations = [
    {
      name: "Paris",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
      desc: "City of Lights and Romance.",
    },
    {
      name: "Bali",
      img: "https://bookmychutti.com/wp-content/uploads/2022/06/bali4-1024x673.jpg",
      desc: "Tropical paradise of beaches.",
    },
    {
      name: "Swiss Alps",
      img: "https://lp-cms-production.imgix.net/2024-04/LPT0115-001.jpg?w=600&h=400",
      desc: "Snowy peaks and chalets.",
    },
    {
      name: "New York",
      img: "https://www.travelguide.net/media/new-york.jpeg",
      desc: "The city that never sleeps.",
    },
    {
      name: "Santorini",
      img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&q=80",
      desc: "Iconic white & blue vistas.",
    },
    {
      name: "Machu Picchu",
      img: "https://www.tourinperu.com/wp-content/uploads/2024/01/Diseno-sin-titulo-2-1.webp",
      desc: "Ancient Incan citadel.",
    },
    {
      name: "Safari",
      img: "https://res.cloudinary.com/theearthsafari/image/upload/c_scale,w_920/f_auto/1697705881_Untitled_20design_20_3_20_1_jjmkmt?_a=BAAASyE0",
      desc: "Wildlife adventures in Africa.",
    },
    {
      name: "Thailand",
      img: "https://www.aladdinholidays.com/assets/img/thailand-tour-packages/thailand-honeymoon-tour-package.webp",
      desc: "Explore the wonders of Thailand.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Nav Bar */}
      <nav className="w-full bg-orange-500 shadow-md fixed top-0 left-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Wanderlust</div>
          <div className="flex gap-4 items-center"><ul className="hidden md:flex space-x-8 text-white">
            <li>
              <a href="#" className="hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="#destinations" className="hover:text-black transition">
                Destinations
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-black transition">
                Why Us
              </a>
            </li>
            <li>
              <a href="#subscribe" className="hover:text-black transition">
                Subscribe
              </a>
            </li>
          </ul>
          <a
            href="#subscribe"
            className="hidden md:inline-block bg-white text-orange-500 font-semibold py-2 px-4 rounded-lg transition hover:bg-gray-200"
          >
            Sign Up
          </a></div>
          
          
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Destinations Section */}
      <section id="destinations" className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Destinations
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{place.name}</h3>
                <p className="text-gray-600">{place.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Wanderlust?
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
          {[
            {
              icon: "🌟",
              title: "Top Reviews",
              desc: "Rated 5-stars by hundreds of travelers.",
            },
            {
              icon: "🔒",
              title: "Secure Booking",
              desc: "Safe, secure, and easy payments.",
            },
            {
              icon: "✈️",
              title: "24/7 Support",
              desc: "We’re here for you around the clock.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section
        id="subscribe"
        className="py-16 bg-orange-500 text-black text-center px-4"
      >
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter for the latest deals and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 text-black">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-4 border-white font-bold w-full sm:w-auto px-4 py-2 rounded-lg text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-orange-500 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-white text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Wanderlust</h3>
            <p className="text-gray-400 mb-2">
              Explore the world with confidence.
            </p>
            <p className="text-gray-400 text-sm">
              123 Global Way, Adventure Blvd
              <br />
              Wander City, WC 10101
            </p>
            <p className="text-gray-400 text-sm mt-2">contact@wanderlust.com</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Discover</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#">Travel Blog</a>
              </li>
              <li>
                <a href="#">Top Destinations</a>
              </li>
              <li>
                <a href="#">Community Stories</a>
              </li>
              <li>
                <a href="#">Wanderlust Deals</a>
              </li>
              <li>
                <a href="#">Virtual Tours</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#">Travel Insurance</a>
              </li>
              <li>
                <a href="#">Visa Guidelines</a>
              </li>
              <li>
                <a href="#">Responsible Tourism</a>
              </li>
              <li>
                <a href="#">Sustainable Travel</a>
              </li>
              <li>
                <a href="#">Safety & Tips</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex justify-center gap-6 text-white text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="text-center text-black-500 text-xs mt-12 border-t border-black pt-6">
          <p>© 2025 Wanderlust Travels. All rights reserved.tytyjhtjh</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
