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
            "I loved around the block and this place had my heart. They are run by a Japanese family that lives in the unit above. The Japanese know how to make a place cool live-in and cool."
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
    // { 
    //   title: "Places to Visit", 
    //   places: [
    //     { name: "The High Line" }, 
    //     { name: "Brooklyn Botanic Garden" }, 
    //     { name: "The Morgan Library" }, 
    //     { name: "The Cloisters" }
    //   ]
    // },
  ];
  
  return (
    <main className="relative w-full min-h-screen bg-hero-bg">
      {/* Header with clickable name */}
      <div className="absolute w-[617px] h-[64px] left-32 top-40 font-jjannon font-normal text-[48px] leading-[58px] flex items-center text-primary/10">
        <Link href="/" className="text-primary/10 hover:text-primary hover:underline transition-colors">
          Apurva Shukla
        </Link>
        /nyc recs
      </div>
      
      {/* Content */}
      <div className="absolute w-[1001px] flex flex-col items-start left-32 top-[279px]">
        {recommendations.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="font-jjannon font-normal text-[30px] leading-[36px] text-primary mb-4">
              {category.title}
            </h2>
            <ul className="pl-6">
              {category.places.map((place, placeIndex) => (
                <li 
                  key={placeIndex} 
                  className="font-jjannon font-normal text-[24px] leading-[40px] text-primary-light list-disc"
                >
                  {place.url ? (
                    <a href={place.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {place.name}
                    </a>
                  ) : (
                    place.name
                  )}
                  {place.details && (
                    <ul className="list-disc pl-12 mt-2 text-[20px]">
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
    </main>
  );
} 