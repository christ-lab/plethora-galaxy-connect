import { useState } from "react"
import GlowCard from "@/components/GlowCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { 
  Search,
  Building2,
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Code,
  Megaphone,
  Truck,
  Wheat,
  Users,
  Calculator,
  Heart,
  GraduationCap,
  Scissors,
  ArrowRight,
  Check,
  Wifi
} from "lucide-react"

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All", "Technology", "Business", "Marketing", "Logistics", 
    "Agriculture", "Finance", "Healthcare", "Education"
  ]

  const services = [
    // Technology Services
    { name: "Software Development", category: "Technology", icon: <Code className="h-6 w-6" />, price: "Contact for Quote" },
    { name: "Web Development", category: "Technology", icon: <Globe className="h-6 w-6" />, price: "From $500" },
    { name: "Mobile App Development", category: "Technology", icon: <Code className="h-6 w-6" />, price: "From $1,000" },
    { name: "IT Consulting", category: "Technology", icon: <Building2 className="h-6 w-6" />, price: "$100/hour" },
    { name: "Cloud Solutions", category: "Technology", icon: <Zap className="h-6 w-6" />, price: "From $200/month" },
    { name: "WiFi Installation", category: "Technology", icon: <Wifi className="h-6 w-6" />, price: "1,000 TZS/day" },
    { name: "Network Security", category: "Technology", icon: <Shield className="h-6 w-6" />, price: "Contact for Quote" },
    { name: "Database Management", category: "Technology", icon: <Building2 className="h-6 w-6" />, price: "$150/month" },
    
    // Business Services
    { name: "Business Consulting", category: "Business", icon: <TrendingUp className="h-6 w-6" />, price: "$200/hour" },
    { name: "Strategic Planning", category: "Business", icon: <TrendingUp className="h-6 w-6" />, price: "From $1,500" },
    { name: "Market Research", category: "Business", icon: <Users className="h-6 w-6" />, price: "From $800" },
    { name: "Project Management", category: "Business", icon: <Building2 className="h-6 w-6" />, price: "$120/hour" },
    { name: "Business Registration", category: "Business", icon: <Building2 className="h-6 w-6" />, price: "From $300" },
    { name: "Legal Documentation", category: "Business", icon: <Shield className="h-6 w-6" />, price: "From $200" },
    
    // Marketing Services
    { name: "Digital Marketing", category: "Marketing", icon: <Megaphone className="h-6 w-6" />, price: "From $500/month" },
    { name: "Social Media Management", category: "Marketing", icon: <Globe className="h-6 w-6" />, price: "From $300/month" },
    { name: "SEO Optimization", category: "Marketing", icon: <TrendingUp className="h-6 w-6" />, price: "From $400/month" },
    { name: "Content Creation", category: "Marketing", icon: <Megaphone className="h-6 w-6" />, price: "From $250/month" },
    { name: "Brand Development", category: "Marketing", icon: <Megaphone className="h-6 w-6" />, price: "From $1,000" },
    
    // Logistics Services
    { name: "Supply Chain Management", category: "Logistics", icon: <Truck className="h-6 w-6" />, price: "Contact for Quote" },
    { name: "Freight Forwarding", category: "Logistics", icon: <Truck className="h-6 w-6" />, price: "Variable Rates" },
    { name: "Warehouse Solutions", category: "Logistics", icon: <Building2 className="h-6 w-6" />, price: "From $2/sq ft/month" },
    { name: "Distribution Services", category: "Logistics", icon: <Truck className="h-6 w-6" />, price: "Contact for Quote" },
    
    // Agriculture Services
    { name: "Agricultural Consulting", category: "Agriculture", icon: <Wheat className="h-6 w-6" />, price: "$80/hour" },
    { name: "Crop Management", category: "Agriculture", icon: <Wheat className="h-6 w-6" />, price: "From $300/season" },
    { name: "Livestock Solutions", category: "Agriculture", icon: <Wheat className="h-6 w-6" />, price: "Contact for Quote" },
    { name: "Farm Technology", category: "Agriculture", icon: <Zap className="h-6 w-6" />, price: "From $500" },
    
    // Finance Services
    { name: "Financial Planning", category: "Finance", icon: <Calculator className="h-6 w-6" />, price: "$150/hour" },
    { name: "Investment Advisory", category: "Finance", icon: <TrendingUp className="h-6 w-6" />, price: "1.5% AUM" },
    { name: "Accounting Services", category: "Finance", icon: <Calculator className="h-6 w-6" />, price: "From $200/month" },
    { name: "Tax Consultation", category: "Finance", icon: <Calculator className="h-6 w-6" />, price: "$100/hour" },
    
    // Healthcare Services
    { name: "Healthcare IT", category: "Healthcare", icon: <Heart className="h-6 w-6" />, price: "Contact for Quote" },
    { name: "Medical Equipment", category: "Healthcare", icon: <Heart className="h-6 w-6" />, price: "Variable" },
    { name: "Health Consulting", category: "Healthcare", icon: <Heart className="h-6 w-6" />, price: "$120/hour" },
    
    // Education Services
    { name: "Educational Technology", category: "Education", icon: <GraduationCap className="h-6 w-6" />, price: "From $1,000" },
    { name: "Training Programs", category: "Education", icon: <GraduationCap className="h-6 w-6" />, price: "$50/person" },
    { name: "E-Learning Platforms", category: "Education", icon: <GraduationCap className="h-6 w-6" />, price: "From $800" },
    
    // Additional Services
    { name: "Barbershop Services", category: "Business", icon: <Scissors className="h-6 w-6" />, price: "From $10" },
  ]

  const wifiPlans = [
    {
      name: "Daily Access",
      price: "1,000 TZS",
      duration: "24 hours",
      features: ["High-speed internet", "Unlimited data", "24/7 support"]
    },
    {
      name: "USD Daily",
      price: "$1 USD",
      duration: "24 hours", 
      features: ["High-speed internet", "Unlimited data", "Premium support"]
    },
    {
      name: "Weekly Plan",
      price: "6,000 TZS",
      duration: "7 days",
      features: ["High-speed internet", "Unlimited data", "Priority support", "15% savings"]
    },
    {
      name: "Monthly Plan", 
      price: "20,000 TZS",
      duration: "30 days",
      features: ["High-speed internet", "Unlimited data", "Premium support", "33% savings"]
    }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive solutions across 58 service categories to accelerate your business growth
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-xl bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* WiFi Pricing Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Wifi className="inline-block h-8 w-8 mr-3 text-primary" />
              WiFi <span className="text-gradient">Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              High-speed internet access with flexible pricing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {wifiPlans.map((plan, index) => (
              <GlowCard key={index} className="text-center">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gradient">{plan.price}</span>
                  <p className="text-muted-foreground">{plan.duration}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full btn-gold">
                  Choose Plan
                </Button>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showing {filteredServices.length} of {services.length} services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <GlowCard key={index} className="group">
                <div className="flex items-start space-x-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                      <span className="text-primary font-medium">{service.price}</span>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team of experts can create tailored solutions to meet your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-gold text-lg px-8 py-4">
                Request Quote <ArrowRight className="ml-2 h-5 w-5" />
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

export default Services