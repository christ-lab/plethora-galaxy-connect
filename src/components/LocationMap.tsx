interface LocationMapProps {
  address: string
  title: string
}

const LocationMap = ({ address, title }: LocationMapProps) => {
  // Create Google Maps embed URL
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}&zoom=15`
  
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${title}`}
        className="rounded-lg"
      />
    </div>
  )
}

export default LocationMap