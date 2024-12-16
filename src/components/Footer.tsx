import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-tl from-green-100 via-[#8FC5C5] to-[#3D9B9B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src="/image/AI-solution-Logo.png"
              alt="AIsolutions Logo"
              width={200}
              height={60}
              className="bg-white p-2 rounded-md"
            />
            <p className="text-sm">
              Empowering businesses with cutting-edge AI solutions for a smarter
              future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="hover:text-green-200 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p>123 AI Street, Tech City</p>
              <p>innovation@aisolutions.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-800"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2023 AIsolutions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[Facebook, Twitter, Linkedin, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-green-200 transition-colors"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
