import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-518.png";

const hours = [
  { day: "Monday", time: "9:00am – 5:30pm" },
  { day: "Tuesday", time: "9:00am – 5:30pm" },
  { day: "Wednesday", time: "9:00am – 8:00pm" },
  { day: "Thursday", time: "9:00am – 5:30pm" },
  { day: "Friday", time: "8:00am – 12:30pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + about */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="518 Dental"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Family dental care delivered with a smile. Providing NHS and
              private treatments in Rochdale.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Treatments", to: "/treatments" },
                { label: "Fees", to: "/fees" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a
                href="tel:01706527127"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4 text-secondary" />
                01706 527127
              </a>
              <a
                href="mailto:admin@518dental.co.uk"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4 text-secondary" />
                admin@518dental.co.uk
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span>518A Bury Road, Rochdale, OL11 4DQ</span>
              </div>
            </div>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-secondary">
              Opening Hours
            </h3>
            <div className="space-y-1.5 text-sm text-primary-foreground/70">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} 518 Dental. All rights reserved.</p>
          <p className="mt-2">
            Powered by{" "}
            <span className="font-medium text-primary-foreground/70">
              LitWebs
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
