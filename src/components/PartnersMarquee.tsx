import { cn } from "@/lib/utils"

const PartnersMarquee = () => {
  const partners = [
    "Alphabet", "Amazon", "Apple", "Microsoft", "Google", "Meta", "Tesla", "Samsung", "Sony", "Intel",
    "IBM", "Oracle", "Cisco", "Adobe", "Salesforce", "Netflix", "PayPal", "Uber", "Airbnb", "Spotify",
    "Twitter", "LinkedIn", "TikTok", "Snapchat", "Pinterest", "Reddit", "Discord", "Zoom", "Slack", "Dropbox",
    "GitHub", "GitLab", "Atlassian", "Figma", "Canva", "Notion", "Airtable", "Shopify", "Square", "Stripe",
    "Mercedes benz", "BMW", "Audi", "Volkswagen", "Toyota", "Honda", "Ford", "General Motors", "Volvo", "Scania",
    "Caterpillar", "John Deere", "Siemens", "General Electric", "Philips", "LG", "Panasonic", "Canon", "Nikon", "HP",
    "Dell", "Lenovo", "ASUS", "Acer", "Xiaomi", "Huawei", "OnePlus", "Oppo", "Vivo", "Open Ui", "Gemini"
  ]

  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-background via-card/50 to-background">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        <div className="flex items-center space-x-8 mr-8">
          {partners.map((partner, index) => (
            <span
              key={`first-${index}`}
              className={cn(
                "text-lg font-medium transition-all duration-300 hover:scale-110",
                "text-[hsl(var(--partners-text))] hover:text-[hsl(var(--partners-hover))]",
                "hover:drop-shadow-glow whitespace-nowrap"
              )}
            >
              {partner}
            </span>
          ))}
        </div>
        {/* Second set for seamless loop */}
        <div className="flex items-center space-x-8">
          {partners.map((partner, index) => (
            <span
              key={`second-${index}`}
              className={cn(
                "text-lg font-medium transition-all duration-300 hover:scale-110",
                "text-[hsl(var(--partners-text))] hover:text-[hsl(var(--partners-hover))]",
                "hover:drop-shadow-glow whitespace-nowrap"
              )}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnersMarquee