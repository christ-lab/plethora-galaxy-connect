import GlowCard from "@/components/GlowCard"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Globe, 
  Trophy,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import ceoPhoto from "@/assets/ceo-photo.png"

const About = () => {
  const milestones = [
    { year: "2022", event: "Company Incorporation in Tanzania" },
    { year: "2023", event: "Expansion to Botswana and Kenya" },
    { year: "2024", event: "UK Office Establishment" },
    { year: "2024", event: "70+ Global Partnerships Secured" }
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for the highest standards in all our services and solutions"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "Honesty, transparency, and ethical practices form the foundation of our business"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Reliability",
      description: "Our clients can count on us to deliver consistent, dependable results"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Quality",
      description: "Every project receives our full attention to detail and commitment to excellence"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Customer Focus",
      description: "Our success is measured by the success and satisfaction of our clients"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Plethora International</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A pioneering force in connecting Africa to the global marketplace through 
            innovative technology solutions and strategic business partnerships.
          </p>
        </div>
      </section>

      {/* CEO's Word */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Word from <span className="text-gradient">Management</span>
            </h2>
          </div>

          <GlowCard className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src={ceoPhoto}
                  alt="MR. Chrispine Mlingi - CEO"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              <div className="text-center md:text-left">
                <blockquote className="text-lg md:text-xl text-muted-foreground italic mb-6">
                  "At Plethora International Group, we believe that Africa's potential is limitless. 
                  Our commitment is to unlock this potential through innovative technology solutions, 
                  strategic partnerships, and unwavering dedication to excellence. Together, we are 
                  not just connecting Africa to the world – we are positioning Africa as a global leader 
                  in the digital economy."
                </blockquote>
                <div>
                  <p className="font-bold text-lg text-gradient">MR. Chrispine Mlingi</p>
                  <p className="text-muted-foreground">Chief Executive Officer</p>
                  <p className="text-sm text-muted-foreground">Plethora International Group of Companies (T) Limited</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our journey in connecting Africa to the world through innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-gold text-lg px-8 py-4">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="text-lg px-8 py-4 border-primary hover:bg-primary/10">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About