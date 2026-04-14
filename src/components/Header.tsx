import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const logo = "/518.jpg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Meet The Team", to: "/meet-the-team" },
  { label: "Patient Journey", to: "/patient-journey" },
  { label: "Treatments", to: "/treatments" },
  { label: "Fees", to: "/fees" },
  { label: "Dental Referral", to: "/dental-referral" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="518 Dental" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === link.to
                  ? "text-secondary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:01706527127"
            className="text-secondary hover:text-secondary/80 transition-colors"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
          >
            <Link to="/contact">Book / Enquire</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-up">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted ${
                  location.pathname === link.to
                    ? "text-secondary bg-muted"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book / Enquire
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
