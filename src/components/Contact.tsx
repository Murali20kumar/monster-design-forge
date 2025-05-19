import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const ContactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-monster-blue" />,
    title: "Email",
    content: "muralitvl56@gmail.com",
    link: "mailto:muralitvl56@gmail.com"
  },
  {
    icon: <Phone className="h-6 w-6 text-monster-blue" />,
    title: "Phone",
    content: "+91 6380440081",
    link: "tel:+91 6380440081"
  },
  {
    icon: <MapPin className="h-6 w-6 text-monster-blue" />,
    title: "Location",
    content: "Tirunelveli, TamilNadu, India",
    link: "https://maps.google.com"
  }
];

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contactRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_hq9lao6',    // Replace with your EmailJS service ID
      'template_0g8dmf9',   // Replace with your EmailJS template ID
      formRef.current,
      'qzCc6K1C7D_NDftM8'     // Replace with your EmailJS public key
    ).then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
      formRef.current.reset();
    }).catch((error) => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    });
  };

  return (
    <section id="contact" ref={contactRef} className="section-padding bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3 animate-on-scroll">
            <Card className="h-full border border-gray-100 shadow-md">
              <CardContent className="p-6 space-y-8">
                <div className="text-center mb-8 mt-4">
                  <img
                    src="/lovable-uploads/de51345b-424a-45d2-b9e1-4648f7d3a36a.png"
                    alt="Monster Design Factory Logo"
                    className="h-20 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">Let's Start a Project Together</h3>
                </div>

                <div className="space-y-6">
                  {ContactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="mr-4">{item.icon}</div>
                      <div>
                        <h4 className="font-medium text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full lg:w-2/3 animate-on-scroll">
            <Card className="border border-gray-100 shadow-md">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-monster-blue">Send A Message</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-700">Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="border-gray-300 focus:border-monster-blue focus:ring-monster-blue/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="border-gray-300 focus:border-monster-blue focus:ring-monster-blue/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-gray-700">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      className="border-gray-300 focus:border-monster-blue focus:ring-monster-blue/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-700">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="border-gray-300 focus:border-monster-blue focus:ring-monster-blue/20 resize-none"
                    />
                  </div>

                  {/* Hidden time field for EmailJS */}
                  <input 
                    type="hidden" 
                    name="time" 
                    value={new Date().toLocaleString()} 
                  />

                  <Button
                    type="submit"
                    className="w-full bg-monster-blue hover:bg-monster-blue/90 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
