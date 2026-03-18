import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/patient-journey" element={<PatientJourney />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/dental-referral" element={<DentalReferral />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
