import { pages, legacyRedirects, siteOrigin } from "@/data/siteRoutes.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import MeetTheTeam from "./pages/MeetTheTeam.tsx";
import PatientJourney from "./pages/PatientJourney.tsx";
import Treatments from "./pages/Treatments.tsx";
import Fees from "./pages/Fees.tsx";
import DentalReferral from "./pages/DentalReferral.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = pages.find((entry) => entry.path.replace(/\/$/, "") === pathname.replace(/\/$/, ""));
    if (!page) return;
    document.title = page.title;
    const canonical = document.querySelector('link[rel="canonical"]') ?? document.head.appendChild(document.createElement("link"));
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", siteOrigin + page.path);
    for (const [attribute, name, value] of [
      ["name", "description", page.description],
      ["property", "og:title", page.title],
      ["property", "og:description", page.description],
      ["property", "og:url", siteOrigin + page.path],
      ["name", "twitter:title", page.title],
      ["name", "twitter:description", page.description],
    ]) {
      const meta = document.querySelector(`meta[${attribute}="${name}"]`) ?? document.head.appendChild(document.createElement("meta"));
      meta.setAttribute(attribute, name);
      meta.setAttribute("content", value);
    }
  }, [pathname]);
  return null;
}

function LegacyRedirect({ target }: { target: string }) {
  const { search, hash } = useLocation();
  const [pathname, treatment] = target.split("#");
  return <Navigate replace to={{ pathname, search, hash: treatment ? `#${treatment}` : hash }} />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <PageMetadata />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/patient-journey" element={<PatientJourney />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/dental-referral" element={<DentalReferral />} />
          <Route path="/contact" element={<Contact />} />
          {Object.entries(legacyRedirects).map(([path, target]) => (
            <Route key={path} path={path} element={<LegacyRedirect target={target} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
