import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you shortly to confirm your booking.");
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-cream">
            Book Your Experience
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Begin your journey to wellness and relaxation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  required
                  className="bg-card border-border h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="bg-card border-border h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="bg-card border-border h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  type="date"
                  placeholder="Preferred Date"
                  required
                  className="bg-card border-border h-12 text-lg"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your preferences or any special requests..."
                  rows={5}
                  className="bg-card border-border text-lg resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold/90 text-background font-semibold text-lg py-6 shadow-glow transition-smooth"
              >
                Request Booking
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cream">Location</h3>
                    <p className="text-muted-foreground">
                      Avenue Hassan II<br />
                      Meknes 50000<br />
                      Morocco
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cream">Phone</h3>
                    <p className="text-muted-foreground">
                      +212 5XX-XXXXXX<br />
                      WhatsApp Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cream">Email</h3>
                    <p className="text-muted-foreground">
                      info@dermospameknes.ma<br />
                      bookings@dermospameknes.ma
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cream">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106410.69467474!2d-5.625285!3d33.893791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda044d14b2f2e6f%3A0x8ff8df4f2d6a8d7!2sMeknes%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dermo Spa Meknes Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
