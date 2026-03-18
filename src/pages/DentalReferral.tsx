import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function DentalReferral() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Referral submitted!", description: "We will review and get back to you shortly." });
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-32 bg-card">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-secondary text-2xl">✓</span>
            </div>
            <h1 className="font-serif text-3xl font-bold mb-4">Referral Submitted</h1>
            <p className="text-muted-foreground">Thank you for your referral. Our team will review it and get in touch shortly.</p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Dental Referral</h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            For GDC registered dentists only. Please complete the form below to refer a patient.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Referring Dentist */}
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4 text-secondary">Referring Dentist Details</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><Label>Name *</Label><Input required /></div>
                    <div><Label>Practice Name *</Label><Input required /></div>
                    <div className="sm:col-span-2"><Label>Address</Label><Input /></div>
                    <div><Label>Email *</Label><Input type="email" required /></div>
                    <div><Label>Phone *</Label><Input type="tel" required /></div>
                  </div>
                </div>

                {/* Patient */}
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4 text-secondary">Patient Details</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div><Label>Name *</Label><Input required /></div>
                    <div><Label>Email</Label><Input type="email" /></div>
                    <div><Label>Address</Label><Input /></div>
                    <div><Label>Phone</Label><Input type="tel" /></div>
                  </div>
                </div>

                {/* Referral reason */}
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4 text-secondary">Referral Details</h3>
                  <div className="space-y-3">
                    <Label>Treatment Area *</Label>
                    <div className="flex flex-wrap gap-3">
                      {["Oral Surgery", "Implants", "Endodontics", "Other"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 text-sm">
                          <input type="checkbox" className="rounded" /> {opt}
                        </label>
                      ))}
                    </div>
                    <Label>Additional Notes</Label>
                    <Textarea rows={4} />
                  </div>
                </div>

                {/* File upload UI */}
                <div>
                  <Label>Attach Files (X-rays, notes)</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center text-sm text-muted-foreground">
                    <p>Drag and drop files here, or click to browse</p>
                    <p className="text-xs mt-1">(Upload functionality coming soon)</p>
                  </div>
                </div>

                {/* Consent */}
                <div className="flex items-start gap-2">
                  <input type="checkbox" required className="mt-1" />
                  <Label className="text-sm text-muted-foreground leading-relaxed">
                    I confirm this referral is made with the patient's knowledge and consent, and I am a GDC registered dentist.
                  </Label>
                </div>

                <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg" size="lg">
                  Submit Referral
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
