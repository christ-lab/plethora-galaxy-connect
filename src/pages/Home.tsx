import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import GlowCard from "@/components/GlowCard"
import { 
  Building2, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  ChevronDown,
  ArrowRight,
  Target,
  Heart,
  Award
} from "lucide-react"
import plethoraLogo from "@/assets/plethora-logo.png"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "IT Consulting",
      description: "Comprehensive technology solutions for modern businesses"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "Strategic online presence and brand development"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Development",
      description: "Growth strategies and market expansion services"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Financial Services",
      description: "Secure and reliable financial solutions"
    }
  ]

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "70+", label: "Global Partners" },
    { number: "58", label: "Service Categories" },
    { number: "5", label: "Countries" }
  ]

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excellence",
      description: "We deliver exceptional quality in everything we do"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Integrity",
      description: "Honesty and transparency guide our business practices"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Innovation",
      description: "We embrace cutting-edge solutions and technologies"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <img 
                  src={plethoraLogo} 
                  alt="Plethora International Group" 
                  className="h-32 w-32 md:h-40 md:w-40 float pulse-glow transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-300" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-3d">
              <span className="text-gradient">PLETHORA</span>
              <br />
              <span className="text-foreground">International Group</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              "Connecting Africa to the World"
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Leading the digital transformation across Africa with innovative business solutions, 
              cutting-edge technology, and global partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/services">
                <Button className="btn-gold text-lg px-8 py-4">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary hover:bg-primary/10">
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-primary mx-auto" />
            </div>
          </div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent/10 rounded-full blur-xl float" style={{ animationDelay: "4s" }} />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth and digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <GlowCard key={index} className="text-center group">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </GlowCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="btn-gold">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our mission to connect Africa to the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <GlowCard key={index} className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of satisfied clients who trust Plethora International Group 
            for their business and technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-gold text-lg px-8 py-4">
                Start Your Journey <Zap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="text-lg px-8 py-4 border-primary hover:bg-primary/10">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home