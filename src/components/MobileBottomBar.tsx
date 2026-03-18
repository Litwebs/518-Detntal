import { Phone, Calendar, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-lg lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href="tel:01706527127"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground hover:text-secondary transition-colors"
        >
          <Phone className="h-5 w-5" />
          Call
        </a>
        <Link
          to="/contact"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium bg-secondary text-secondary-foreground"
        >
          <Calendar className="h-5 w-5" />
          Book
        </Link>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=518A+Bury+Road+Rochdale+OL11+4DQ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground hover:text-secondary transition-colors"
        >
          <Navigation className="h-5 w-5" />
          Directions
        </a>
      </div>
    </div>
  );
}
