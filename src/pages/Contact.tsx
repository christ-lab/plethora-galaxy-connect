import GlowCard from "@/components/GlowCard"
import LocationMap from "@/components/LocationMap"
import PartnersMarquee from "@/components/PartnersMarquee"
import { 
  MapPin, 
  Mail, 
  Phone,
  Instagram,
  ExternalLink,
  User
} from "lucide-react"

const Contact = () => {

  const locations = [
    {
      title: "Headquarters",
      country: "Tanzania",
      address: "429 Mahando Street, Msasani Peninsula, Dar es Salaam, Tanzania"
    },
    {
      title: "Botswana Branch", 
      country: "Botswana",
      address: "Plot 78, Block 16, Botswana Innovation Hub, Gaborone, Botswana"
    },
    {
      title: "South Africa Branch",
      country: "South Africa", 
      address: "Bridle Cl, Woodmead, Sandton, 2191, South Africa"
    },
    {
      title: "Kenya Branch",
      country: "Kenya",
      address: "Block 54, Kisauni Rd, Nairobi, Kenya"
    },
    {
      title: "UK Branch",
      country: "United Kingdom",
      address: "64Silbury Blvd, Milton Keynes MK9 1LT, United Kingdom"
    },
    {
      title: "Rwanda Branch", 
      country: "Rwanda",
      address: "KG 11Ave, Kimisagara, Kigali, Rwanda"
    },
    {
      title: "Uganda Branch",
      country: "Uganda", 
      address: "Ammex Building, Kampala, Uganda"
    }
  ]


  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-gradient">Plethora International Group</span>
          </h1>
          <div className="relative">
            <p className="text-xl text-muted-foreground">
              Connecting Africa to the World
            </p>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-32 h-0.5 bg-gradient-to-r from-[hsl(var(--accent-gold))] to-[hsl(var(--accent-gold))] opacity-80"></div>
          </div>
        </div>
      </section>

      {/* Company & Executive Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Information */}
            <GlowCard>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Company Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-lg mb-2">Plethora International Group of Companies</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    <a 
                      href="https://www.plethoragroupofcompanies.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent-gold transition-colors"
                    >
                      www.plethoragroupofcompanies.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-primary" />
                    <a 
                      href="https://instagram.com/plethora_group" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-accent-gold transition-colors"
                    >
                      @plethora_group
                    </a>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:info@plethoragroupofcompanies.com" className="text-primary hover:text-accent-gold transition-colors">
                      info@plethoragroupofcompanies.com
                    </a>
                  </div>
                </div>
              </div>
            </GlowCard>

            {/* Executive Contact */}
            <GlowCard>
              <h3 className="text-2xl font-bold mb-6 text-gradient">Executive Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg">Chris M.</h4>
                    <p className="text-muted-foreground">Executive Director, CEO & Founder</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+255747666647" className="text-primary hover:text-accent-gold transition-colors">
                      +255 747 666 647
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+447554418085" className="text-primary hover:text-accent-gold transition-colors">
                      +44 7554 418 085
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:ceo@plethoragroupofcompanies.com" className="text-primary hover:text-accent-gold transition-colors">
                      ceo@plethoragroupofcompanies.com
                    </a>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Locations with Maps */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find us across Africa and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <GlowCard key={index} className="hover:translate-y-[-5px] transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{location.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line">
                        {location.address}
                      </p>
                    </div>
                  </div>
                  
                  <LocationMap 
                    address={location.address}
                    title={location.title}
                  />
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading companies worldwide
            </p>
          </div>
          
          <PartnersMarquee />
        </div>
      </section>
    </div>
  )
}

export default Contact
