import { Link } from "react-router-dom"
import { Building2, Mail, Phone, MapPin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-lg font-bold text-gradient">PLETHORA</h3>
                <p className="text-xs text-muted-foreground">International Group</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting Africa to the World through innovative technology and business solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/plethora_group" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Legal", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors underline-animate"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>IT Consulting</li>
              <li>Digital Marketing</li>
              <li>Logistics & Supply Chain</li>
              <li>Agribusiness Solutions</li>
              <li>Financial Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Dar es Salaam, Tanzania<br />
                  Kinondoni, Masaki Golden Tulip
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@plethora.co.tz</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+255 XXX XXX XXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>© 2024 Plethora International Group of Companies (T) Limited. All rights reserved.</p>
              <p className="text-xs mt-1">
                BRELA No. 157-652-710 | TIN: 157-652-710 | BL No. BL01396912024-2500016699
              </p>
            </div>
            <p className="text-sm text-primary font-medium">
              "Connecting Africa to the World"
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer