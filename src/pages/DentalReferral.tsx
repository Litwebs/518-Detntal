import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DentalReferral() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Dental Referral
          </h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            For GDC registered dentists only. Please complete the form below to
            refer a patient.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-none shadow-md">
            <CardContent className="p-8">
              <form
                action="https://formsubmit.co/admin@518dental.co.uk"
                method="POST"
                className="space-y-8"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="518 Dental Referral Form Submission"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                {/* Referring Dentist */}
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4 text-secondary">
                    Referring Dentist Details
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label>Name *</Label>
                      <Input name="referring_dentist_name" required />
                    </div>
                    <div>
                      <Label>Practice Name *</Label>
                      <Input name="practice_name" required />
                    </div>
                    <div className="sm:col-span-2">
                      <Label>Address</Label>
                      <Input name="practice_address" />
                    </div>
                    <div>
                      <Label>Email *</Label>
                      <Input
                        name="referring_dentist_email"
                        type="email"
                        required
                      />
                    </div>
                    <div>
                      <Label>Phone *</Label>
                      <Input
                        name="referring_dentist_phone"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Patient */}
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4 text-secondary">
                    Patient Details
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label>Name *</Label>
                      <Input name="patient_name" required />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input name="patient_email" type="email" />
                    </div>
                    <div>
                      <Label>Address</Label>
                      <Input name="patient_address" />
                    </div>
                    <div>
                      <Label>Phone</Label>
                      <Input name="patient_phone" type="tel" />
                    </div>
                  </div>
                </div>

                {/* Referral reason */}
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4 text-secondary">
                    Referral Details
                  </h3>
                  <div className="space-y-3">
                    <Label>Treatment Area *</Label>
                    <div className="flex flex-wrap gap-3">
                      {["Oral Surgery", "Implants", "Endodontics", "Other"].map(
                        (opt) => (
                          <label
                            key={opt}
                            className="flex items-center gap-2 text-sm"
                          >
                            <input
                              type="checkbox"
                              name="treatment_area[]"
                              value={opt}
                              className="rounded"
                            />{" "}
                            {opt}
                          </label>
                        ),
                      )}
                    </div>
                    <Label>Additional Notes</Label>
                    <Textarea name="additional_notes" rows={4} />
                  </div>
                </div>
                {/* Consent */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="referral_consent"
                    value="Confirmed"
                    required
                    className="mt-1"
                  />
                  <Label className="text-sm text-muted-foreground leading-relaxed">
                    I confirm this referral is made with the patient's knowledge
                    and consent, and I am a GDC registered dentist.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
                  size="lg"
                >
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
