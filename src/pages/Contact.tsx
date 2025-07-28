import { useState } from "react"
import GlowCard from "@/components/GlowCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock,
  Building2,
  Globe,
  Send,
  Instagram,
  MessageSquare
} from "lucide-react"

const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    })
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const offices = [
    {
      country: "Tanzania (Headquarters)",
      city: "Dar es Salaam",
      address: "Kinondoni, Masaki Golden Tulip",
      region: "Dar es Salaam Region",
      phone: "+255 XXX XXX XXX",
      email: "info@plethora.co.tz"
    },
    {
      country: "Botswana",
      city: "Gaborone",
      address: "Central Business District",
      region: "South-East District",
      phone: "+267 XXX XXXX",
      email: "botswana@plethora.co.tz"
    },
    {
      country: "Kenya", 
      city: "Nairobi",
      address: "Westlands Business District",
      region: "Nairobi County",
      phone: "+254 XXX XXX XXX",
      email: "kenya@plethora.co.tz"
    },
    {
      country: "United Kingdom",
      city: "London",
      address: "City of London",
      region: "Greater London",
      phone: "+44 XXX XXX XXXX",
      email: "uk@plethora.co.tz"
    }
  ]

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Send us an email anytime",
      details: ["info@plethora.co.tz", "ceo@plethora.co.tz"],
      action: "mailto:info@plethora.co.tz"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us", 
      description: "Speak with our team",
      details: ["+255 XXX XXX XXX", "Available 24/7"],
      action: "tel:+255XXXXXXXXX"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Social Media",
      description: "Follow us on Instagram",
      details: ["@plethora_group", "Daily updates"],
      action: "https://instagram.com/plethora_group"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Chat with our support team",
      details: ["Available Mon-Fri", "9 AM - 6 PM EAT"],
      action: "#"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Public Holidays", hours: "Closed" }
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Contact our team of experts and let's discuss 
            how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact <span className="text-gradient">Methods</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <GlowCard key={index} className="text-center group cursor-pointer">
                <a href={method.action} target={method.action.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="block">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <div className="space-y-1">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-sm font-medium text-primary">{detail}</p>
                    ))}
                  </div>
                </a>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlowCard>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+255 XXX XXX XXX"
                      type="tel"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    type="email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full btn-gold">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </GlowCard>

            {/* Business Hours */}
            <div className="space-y-8">
              <GlowCard>
                <h3 className="text-2xl font-bold mb-6 text-gradient">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-medium">East Africa Time (EAT)</span>
                  </div>
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>

              <GlowCard>
                <h3 className="text-xl font-bold mb-4 text-gradient">Quick Info</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <Building2 className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Languages</p>
                      <p className="text-muted-foreground">English, Swahili</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Service Areas</p>
                      <p className="text-muted-foreground">Tanzania, Botswana, Kenya, UK</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Offices</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find us across Africa and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <GlowCard key={index}>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{office.country}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p><span className="font-medium">City:</span> {office.city}</p>
                      <p><span className="font-medium">Address:</span> {office.address}</p>
                      <p><span className="font-medium">Region:</span> {office.region}</p>
                      <p><span className="font-medium">Phone:</span> {office.phone}</p>
                      <p><span className="font-medium">Email:</span> {office.email}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Barbershop Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlowCard className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Plethora Barbershop</h3>
            <p className="text-muted-foreground mb-6">
              Visit our barbershop location in Dar es Salaam for premium grooming services.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Dar es Salaam, Tanzania</span>
            </div>
          </GlowCard>
        </div>
      </section>
    </div>
  )
}

export default Contact