import GlowCard from "@/components/GlowCard"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Download, 
  Shield, 
  Building2,
  CreditCard,
  Scale,
  CheckCircle
} from "lucide-react"

const Legal = () => {
  const documents = [
    {
      title: "Certificate of Incorporation",
      description: "Official company registration certificate from BRELA (Business Registrations and Licensing Agency) Tanzania",
      type: "Incorporation",
      number: "No: 157652710",
      date: "August 31, 2022",
      authority: "BRELA - Tanzania",
      icon: <Building2 className="h-8 w-8" />,
      status: "Active"
    },
    {
      title: "Taxpayer Identification Number (TIN) Certificate",
      description: "Official TIN registration certificate from Tanzania Revenue Authority",
      type: "Tax Registration",
      number: "TIN: 157-652-710",
      date: "August 31, 2022",
      authority: "Tanzania Revenue Authority",
      icon: <CreditCard className="h-8 w-8" />,
      status: "Active"
    },
    {
      title: "Business License",
      description: "Official business license for ICT Services Local operations",
      type: "Business License",
      number: "BL No: BL01396912024-2500016699",
      date: "November 14, 2024",
      authority: "Kinondoni Municipal Council",
      icon: <Scale className="h-8 w-8" />,
      status: "Active",
      expiry: "November 13, 2025"
    }
  ]

  const legalInfo = [
    {
      title: "Registered Company Name",
      value: "PLETHORA INTERNATIONAL GROUP OF COMPANIES (T) LIMITED"
    },
    {
      title: "BRELA Registration Number",
      value: "157652710"
    },
    {
      title: "Tax Identification Number (TIN)",
      value: "157-652-710"
    },
    {
      title: "Business License Number",
      value: "BL01396912024-2500016699"
    },
    {
      title: "Business Type",
      value: "Limited Liability Company"
    },
    {
      title: "Business Category",
      value: "ICT Services Local"
    },
    {
      title: "Registered Office",
      value: "Dar es Salaam, Kinondoni, Masaki Golden Tulip, Tanzania"
    },
    {
      title: "Incorporation Date",
      value: "August 31, 2022"
    }
  ]

  const compliance = [
    {
      title: "BRELA Compliance",
      description: "Fully compliant with Tanzania business registration requirements",
      status: "Compliant"
    },
    {
      title: "Tax Compliance",
      description: "Up to date with all tax obligations and filings",
      status: "Compliant"
    },
    {
      title: "Business License",
      description: "Valid business license for ICT services operations",
      status: "Active"
    },
    {
      title: "Annual Returns",
      description: "Annual returns filed as required by law",
      status: "Up to Date"
    }
  ]

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 hero-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Legal <span className="text-gradient">Documentation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Official certificates and legal documents establishing our legitimate business operations 
            across Tanzania and internationally.
          </p>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Official <span className="text-gradient">Documents</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Certified legal documents and registrations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <GlowCard key={index} className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{doc.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Number:</span>
                    <span className="font-medium">{doc.number.split(': ')[1]}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Date:</span>
                    <span>{doc.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Authority:</span>
                    <span>{doc.authority}</span>
                  </div>
                  {doc.expiry && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Expires:</span>
                      <span>{doc.expiry}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {doc.type}
                  </Badge>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {doc.status}
                  </Badge>
                </div>

                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  View Document
                </Button>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Company <span className="text-gradient">Information</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Official company details and registration information
            </p>
          </div>

          <GlowCard className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalInfo.map((info, index) => (
                <div key={index} className="flex justify-between items-start py-3 border-b border-border/50 last:border-b-0">
                  <span className="text-muted-foreground font-medium flex-1">{info.title}:</span>
                  <span className="text-foreground font-semibold text-right flex-1">{info.value}</span>
                </div>
              ))}
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Compliance Status */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance <span className="text-gradient">Status</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to legal compliance and regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compliance.map((item, index) => (
              <GlowCard key={index}>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlowCard className="text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-gradient">Legal Verification</h3>
            <p className="text-muted-foreground mb-6">
              All documents displayed are authentic and can be verified through the respective 
              Tanzanian government authorities. Our company operates in full compliance with 
              local and international business regulations.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>For verification, contact:</p>
              <p className="font-medium">BRELA: +255 22 2110355 | TRA: +255 22 2134298</p>
            </div>
          </GlowCard>
        </div>
      </section>
    </div>
  )
}

export default Legal