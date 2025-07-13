import Link from "next/link";

export const metadata = {
  title: 'NYC Recommendations',
  description: 'My favorite places in New York City',
};

export default function NYCRecsPage() {
  const recommendations = [
    { 
      title: "Favorite Bakeries and Coffee Shops", 
      places: [
        { name: "La Cabra (Soho)", url: "https://www.lacabra.dk/", details: ["I've only been to it twice, and everything was great."]},
        { 
          name: "Cotton Bean (Crown Heights)",
          details: [
            "I lived around the block and this place had my heart. They are run by a Japanese family that lives in the unit above. The Japanese know how to make a place cool live-in and cool."
            , "They attract all the hipsters of the block, but it's still low-key. I love their hazelnut pretzel pastry."
        ]
        },
        {
          name: "Radio Bakery (Greenpoint)",
          details: ["I enjoy all their sourdough sandwiches, especially the smoked salmon and the sweet pea one.", 
            "The chokehold this place has on NYC bakery scene is well-deserved", 
            "Although the Prospect Heights location is strangely more crowded than the original Greenpoint location"]
        },
      ]
    },
    { 
      title: "Favorite Restaurants", 
      places: [
        { 
          name: "Ba Xuyen (Sunset Park)" ,
          url: "https://maps.app.goo.gl/L4pYMVPK9jRGeDq26" ,
          details : ["Best bahn-mi in the city. Get classic or roast pork. Extra spicy"]
        },
        { 
          name: "Lucky Vegetarian (Sunset Park)" ,
          url: "https://maps.app.goo.gl/dvyPkydXsvSnb1iw8" ,
          details : ["Get the mahogany fried rice. I don't know what crack they put in that"]
        }
      ]
    },
  ];
  
  return (
    <main className="flex flex-col items-center min-h-screen w-full bg-hero-bg p-6 sm:p-12 lg:p-24">
      <div className="w-full max-w-4xl">
        {/* Header with clickable name */}
        <div className="mb-12 font-jjannon font-normal text-[32px] sm:text-[48px] leading-tight text-primary/10">
          <Link href="/" className="hover:text-primary hover:underline transition-colors">
            Apurva Shukla
          </Link>
          /nyc recs
        </div>
        
        {/* Content */}
        <div className="flex flex-col gap-12">
          {recommendations.map((category, index) => (
            <div key={index}>
              <h2 className="font-jjannon font-normal text-[28px] sm:text-[30px] leading-tight text-primary mb-4">
                {category.title}
              </h2>
              <ul className="pl-6 flex flex-col gap-6">
                {category.places.map((place, placeIndex) => (
                  <li 
                    key={placeIndex} 
                    className="font-jjannon font-normal text-[20px] sm:text-[24px] leading-normal text-primary-light list-disc"
                  >
                    {place.url ? (
                      <a href={place.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {place.name}
                      </a>
                    ) : (
                      place.name
                    )}
                    {place.details && (
                      <ul className="list-disc pl-8 sm:pl-12 mt-2 text-[18px] sm:text-[20px] leading-relaxed">
                        {place.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-primary-light/90">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 