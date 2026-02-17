export const packages = [
  {
    id: "paris-main",
    name: "Paris",
    location :"France",
    image: "/package/paris.jpg",
    title: "Visit Iconic Landmarks with our Paris Tour Packages",
    description: `Paris, the enchanting "Fairy-Tale City," beckons with its timeless allure and romantic spirit. A city where art meets architecture, and history dances with modernity, Paris offers an unforgettable journey through its charming boulevards and iconic landmarks.
    
    Our carefully curated 4-day, 3-night Paris tour package invites you to discover the city's most treasured attractions, this independent tour lets you explore Paris at your own pace, immersing yourself in its rich culture, romantic atmosphere, and historical significance.`,
    reasons: [
      {
        title: "Mouthwatering Food",
        description: `If you're a foodie, French cuisine alone should be a reason to visit the country. The French have elevated eating as an art form, so it is not surprising that their gastronomic meals are now listed as an intangible UNESCO cultural heritage.
        Be it the crusty and warm baguettes, the fresh seafood, or the wholesome boeuf bourguignon, every day in France promises to be a culinary adventure. With our France tour packages, you can wake up to the aroma of freshly baked French bread, learn about the complex world of French sauces, enjoy French charcuterie, or visit Paris' multiple patisseries.`
      },
      {
        title: "Exquisite Wines",
        description: `Wine connoisseurs will have a gala time in France, as the country is well-known for its world-renowned wines. Almost every region in France has its own unique grape types and wine styles. While Bordeaux, Burgundy, and Champagne are the popular wine regions in the country, various bestselling wines and local favourites can also be found in specific regions and villages.
        With our France tour packages, you can visit the many wine estates and vineyards that the country is home to. Indulge in wine tasting sessions and gain deeper knowledge about making wine through the wine tours we can organise for you.`
      },
      {
        title: "History And Culture",
        description: `French history is deep and rich from the reign of Louis XIV to the French Revolution, the declaration of France as a Republic, the rise of Napoleon, and the declaration of human rights in 1948. Battlegrounds, cathedrals, and churches in France make for some of the most popular sightseeing spots, including the Old Port of Marseille, Sacre-Coeur Basilica, the Palace of Versailles, and Notre Dame.
        Cultural activities form such a vital part of the country that France has a Ministry of Culture in charge of the historical monuments and museums of France. The goal of the Ministry of Culture is to promote and protect the arts in the country and abroad, maintain the regional cultural centres of France, and keep up the identity of French culture. Several cultural events take place in France throughout the year. There is the Fete de la Musique, an event meant to promote music. It always takes place on the 21st of June, and professional and amateur musicians perform on the streets.`
      },
      {
        title: "Diverse Landscapes",
        description: `The sights in France are not just about museums, galleries, and sidewalk cafes. France has diverse and unique landscapes, from mountaintops and gorges to rivers, vineyards, and quaint villages. These landscapes allow travellers to engage in various adventurous activities, including rock climbing, cycling, and cave diving.
        On one hand, there are the snow-covered slopes of Mont Blanc, and on the other, there are the sunny beaches of Nice. The French Riviera is famous for its luxurious and flamboyant hotels and the celebrities who spend their holidays soaking in the Mediterranean sun. Whether you're a beach person or a mountain lover, the landscapes of France will satisfy one and all.`
      },
      {
        title: "Vibrant Cities And Charming Countryside",
        description: `The vibrant cities of France contain a mix of museums, enticing scenery, unique architecture, and historical sites. Of course, there is Paris with its galleries, exhibitions, festivals, and fairs. There is the city of Nice, which is home to stunning beaches, Baroque architecture, intriguing museums, and interesting markets. Lyon is known for its gastronomy, museums, theatres, ancient heritage, and the popular Festival of Lights.
        When you wish to take a break from the hustle and bustle of city life, the French countryside offers the best escape. You will see high mountains, pink salt plains, scenic rivers, gorges, sandy beaches, and rolling green hills. Make sure to visit the highland region of Massif Central, the French Lake District of Limousin, and the lavender fields in Provence.`
      }
    ],
    path: "/paris",
    price:5000,
    type: "Group Tours",
    categories: ["city", "culture", "romantic", "historical"],
  
    topAttractions: [
      {
        id: 1,
        name: "Eiffel Tower",
        image: "/attractions/effil.jpg",
      },
      {
        id: 2,
        name: "Notre-Dame Cathedral",
        image: "/attractions/Cathedral.jpg",
      },
      {
        id: 3,
        name: "Palace of Versailles",
        image: "/attractions/Versailles.jpg",
      },
      {
        id: 4,
        name: "Arc de Triomphe",
        image: "/attractions/arc-de-triomphe.jpg",
      },
      {
        id: 5,
        name: "Seine River Cruise",
        image: "/attractions/seine-cruise.jpg",
      },
      {
        id: 6,
        name: "Seine River Cruise",
        image: "/attractions/seine-cruise.jpg",
      },
      {
        id: 7,
        name: "Seine River Cruise",
        image: "/attractions/seine-cruise.jpg",
      },

    ],
    subPlaces: [
      // {
      //   id: "paris-eiffel",
      //   name: "Eiffel Tower Tour",
      //   image: "/package/paris/effilt.jpg",
      //   title: "Experience the iconic symbol of Paris",
      //   path: "/paris/eiffel-tower",
      //   type: "Independent Tours",
      //   categories: ["landmark", "romantic", "city"]
      // },
      // {
      //   id: "paris-louvre",
      //   name: "Louvre Museum",
      //   image: "/package/paris/lov.jpg",
      //   gallery: [
      //     "/package/paris/lov.jpg",
      //     "/package/paris/cat.jpg",
      //     "/package/paris/louvre-3.jpg",
      //     "/package/paris/louvre-4.jpg"
      //   ],
      //   title: "Discover world's largest art museum",
      //   path: "/paris/louvre",
      //   type: "Independent Tours",
      //   categories: ["culture", "art", "museum"]
      // },
      {
        id: "paris-eiffel",
        name: "Eiffel Tower Tour",
        image: "/package/paris/effilt.jpg",
        gallery: [
          "/package/paris/eiffel-1.jpg",
          "/package/paris/eiffel-2.jpg",
          "/package/paris/eiffel-3.jpg",
          "/package/paris/eiffel-4.jpg"
        ],
        title: "Experience the iconic symbol of Paris",
        description: "The Eiffel Tower, constructed by Gustave Eiffel for the 1889 World's Fair, stands as Paris's most recognizable landmark and a marvel of 19th-century engineering. Rising 324 meters above the Champ de Mars, this iron lattice tower offers unparalleled panoramic views of Paris from its three observation levels. By day, visitors can see up to 70 kilometers in clear weather; by night, the tower's 20,000 sparkling lights create a magical display. Beyond being a tourist attraction, the Eiffel Tower houses restaurants, including the Michelin-starred Le Jules Verne, and serves as a global symbol of French culture and romance.",
        duration: "2-3 hours",
        path: "/paris/eiffel-tower",
        type: "Independent Tours",
        categories: ["landmark", "romantic", "city"],
        highlights: [
          "Ascend to the top for breathtaking 360° views of Paris",
          "Experience the tower illuminated with golden lights after sunset",
          "Enjoy a glass of champagne from the champagne bar on the top floor",
          "Learn about the tower's fascinating history and construction",
          "Dine at one of the tower's restaurants with spectacular views",
          "Capture perfect photos of Paris from different observation levels"
        ]
      },
      {
        id: "paris-louvre",
        name: "Louvre Museum",
        image: "/package/paris/lov.jpg",
        gallery: [
          "/package/paris/louvre-1.jpg",
          "/package/paris/louvre-2.jpg",
          "/package/paris/louvre-3.jpg",
          "/package/paris/louvre-4.jpg"
        ],
        title: "Discover world's largest art museum",
        description: "The Louvre Museum, originally a royal palace, is now home to one of the world's largest and most diverse art collections. Spanning over 60,000 square meters, it houses approximately 38,000 objects from prehistory to the 21st century. The museum's most famous resident is Leonardo da Vinci's 'Mona Lisa', but equally impressive are masterpieces like the 'Venus de Milo', 'Winged Victory of Samothrace', and countless treasures from ancient Egypt, Greece, and Rome. The iconic glass pyramid designed by I.M. Pei serves as the main entrance, seamlessly blending modern architecture with the historic palace.",
        duration: "3-4 hours",
        path: "/paris/louvre",
        type: "Independent Tours",
        categories: ["culture", "art", "museum"],
        highlights: [
          "See the enigmatic smile of Leonardo da Vinci's 'Mona Lisa'",
          "Marvel at the graceful 'Venus de Milo' sculpture",
          "Explore the apartments of Napoleon III with their lavish decorations",
          "Discover the ancient Egyptian collection including sphinxes and mummies",
          "Appreciate the iconic glass pyramid designed by architect I.M. Pei",
          "View masterpieces by Delacroix, Raphael, Rubens, and other legendary artists"
        ],
       
      },
      {
        id: "paris-versailles",
        name: "Versailles Palace",
        image: "/package/paris/palace.jpg",
        title: "Visit the grand Palace of Versailles",
        path: "/paris/versailles",
        type: "Independent Tours",
        categories: ["historical", "culture", "garden"]
      },
      {
        id: "paris-notre-dame",
        name: "Notre-Dame Cathedral",
        image: "/package/paris/cat.jpg",
        title: "Explore the medieval Catholic cathedral",
        path: "/paris/notre-dame",
        type: "Independent Tours",
        categories: ["historical", "religious", "architecture"]
      },
      {
        id: "paris-sacre-coeur",
        name: "Sacré-Cœur Basilica",
        image: "/package/paris/Sacré-Cœur Basilica.jpg",
        title: "Visit the iconic white-domed basilica in Montmartre",
        path: "/paris/sacre-coeur",
        type: "Independent Tours",
        categories: ["religious", "architecture", "viewpoint"]
      },
      {
        id: "paris-montmartre",
        name: "Montmartre Walking Tour",
        image: "/package/paris/Montmartre Walking Tour.jpg",
        title: "Discover Paris's historic arts district",
        path: "/paris/montmartre",
        type: "Guided Tours",
        categories: ["culture", "arts", "neighborhood"]
      },
      {
        id: "paris-seine",
        name: "Seine River Cruise",
        image: "/package/paris/Seine River Cruise.jpg",
        title: "See Paris from the water on a scenic river cruise",
        path: "/paris/seine-cruise",
        type: "Cruise Tours",
        categories: ["romantic", "sightseeing", "water"]
      },
      {
        id: "paris-orsay",
        name: "Musée d'Orsay",
        image: "/package/paris/Musée d'Orsay.jpg",
        title: "Experience impressionist masterpieces in a former railway station",
        path: "/paris/musee-orsay",
        type: "Independent Tours",
        categories: ["art", "museum", "culture"]
      },
      {
        id: "paris-catacombs",
        name: "Paris Catacombs",
        image: "/package/paris/Catacombs.jpg",
        title: "Journey underground to Paris's famous ossuary",
        path: "/paris/catacombs",
        type: "Guided Tours",
        categories: ["historical", "unusual", "underground"]
      },
      {
        id: "paris-arc",
        name: "Arc de Triomphe",
        image: "/package/paris/ArcDeTriomphe.jpg",
        title: "Visit one of the most famous monuments in Paris",
        path: "/paris/arc-de-triomphe",
        type: "Independent Tours",
        categories: ["landmark", "historical", "viewpoint"]
      },
      {
        id: "paris-pompidou",
        name: "Centre Pompidou",
        image: "/package/paris/Pompidou.jpg",
        title: "Explore Europe's largest modern art museum",
        path: "/paris/centre-pompidou",
        type: "Independent Tours",
        categories: ["art", "museum", "architecture"]
      },
      {
        id: "paris-tuileries",
        name: "Tuileries Garden",
        image: "/package/paris/Tuileries.jpg",
        title: "Stroll through one of Paris's most famous public gardens",
        path: "/paris/tuileries-garden",
        type: "Self-Guided Tours",
        categories: ["garden", "relaxation", "sightseeing"]
      },
      {
        id: "paris-luxembourg",
        name: "Luxembourg Gardens",
        image: "/package/paris/Luxembourg.jpg",
        title: "Visit the second largest public park in Paris",
        path: "/paris/luxembourg-gardens",
        type: "Self-Guided Tours",
        categories: ["garden", "relaxation", "family"]
      },
      {
        id: "paris-pantheon",
        name: "The Panthéon",
        image: "/package/paris/Pantheon.jpg",
        title: "Discover the mausoleum containing remains of distinguished French citizens",
        path: "/paris/pantheon",
        type: "Independent Tours",
        categories: ["historical", "architecture", "culture"]
      },
      {
        id: "paris-sainte-chapelle",
        name: "Sainte-Chapelle",
        image: "/package/paris/SainteChapelle.jpg",
        title: "Marvel at the stunning medieval stained glass chapel",
        path: "/paris/sainte-chapelle",
        type: "Independent Tours",
        categories: ["religious", "architecture", "historical"]
      }
    ],
    travelAdvice: {
      title: "Paris Travel Advice",
      description: "Essential information to help you plan your perfect Paris trip, curated from travel forums and expert recommendations.",
      sections: [
        {
          title: "Public Transportation Options",
          icon: "train",
          content: [
            {
              heading: "Public Transport Overview",
              text: "Paris offers an extensive public transportation network managed by RATP, including metros, buses, and trams. The network covers the entire city, with stations typically no more than 500m apart."
            },
            {
              heading: "Metro and RER Details",
              text: "The metro is the fastest way to navigate Paris with 16 lines. The RER train provides direct connections for longer distances, including to Disneyland Paris and Charles de Gaulle Airport."
            },
            {
              heading: "Recommended Bus Routes",
              text: "Bus 69 is ideal for sightseeing as it passes many major attractions. Bus routes are less intuitive than the metro but offer better views of the city."
            },
            {
              heading: "Tickets and Passes",
              text: "A single metro or bus ride costs €1.90. For visitors, these options are recommended:",
              list: [
                "Navigo Découverte: €5 for the card plus weekly/monthly pass cost; unlimited travel",
                "Paris Visite Pass: 1-5 day tourist passes with unlimited travel",
                "Ticket Mobilité: 1-day unlimited travel for €8.45"
              ],
              listStyle: "disc"
            }
          ]
        },
        {
          title: "Where to Stay",
          icon: "hotel",
          content: [
            {
              heading: "Recommended Areas",
              text: "Central arrondissements (1st, 4th, 5th, and 6th) offer the best access to major attractions. The Latin Quarter and Le Marais are particularly charming with excellent metro connectivity."
            },
            {
              heading: "Hotel Suggestions",
              list: [
                { 
                  title: "Hotel Britannique (1st Arr.)", 
                  description: "Charming hotel with central location near the Seine and Notre-Dame"
                },
                { 
                  title: "Hotel Marais Bastille (11th Arr.)", 
                  description: "Modern hotel with good reviews and great transport connections"
                },
                { 
                  title: "Hotel Observatoire Luxembourg (6th Arr.)", 
                  description: "Family-friendly hotel opposite Luxembourg Garden"
                },
                { 
                  title: "Ibis Styles Paris Meteor (13th Arr.)", 
                  description: "Budget-friendly option with good metro access"
                }
              ]
            },
            {
              heading: "Family Accommodations",
              text: "For families, consider aparthotels like Citadines or Adagio, which offer more space and kitchen facilities. The Hotel de Suez in the Latin Quarter is also noted for its family-friendly rooms and central location."
            },
            {
              note: {
                color: "amber",
                title: "Booking Tip",
                text: "For better rates and potential perks like free breakfast, book directly through the hotel's official website rather than third-party booking sites."
              }
            }
          ]
        },
        {
          title: "Day Trips from Paris",
          icon: "calendar",
          grid: [
            {
              title: "Versailles",
              description: "The magnificent palace and gardens are just a 45-minute RER C train ride from central Paris.",
              details: {
                transport: "🚆 Transport: RER C train",
                time: "⏱️ Travel time: 45 minutes",
                highlights: "🏛️ Highlights: Palace of Versailles, gardens, Grand and Petit Trianon"
              }
            },
            {
              title: "Reims",
              description: "The champagne capital with a stunning cathedral and champagne house tours.",
              details: {
                transport: "🚆 Transport: High-speed TGV train",
                time: "⏱️ Travel time: 45 minutes", 
                highlights: "🏛️ Highlights: Cathedral, Museum of the Surrender, champagne cellars"
              }
            },
            {
              title: "Fontainebleau",
              description: "Historical château and vast forest perfect for hiking and biking.",
              details: {
                transport: "🚆 Transport: Transilien train from Gare de Lyon",
                time: "⏱️ Travel time: 40 minutes",
                highlights: "🏛️ Highlights: Château de Fontainebleau, forest"
              }
            },
            {
              title: "Chartres",
              description: "Home to one of the finest Gothic cathedrals in France with spectacular stained glass.",
              details: {
                transport: "🚆 Transport: Train from Montparnasse station",
                time: "⏱️ Travel time: 1 hour",
                highlights: "🏛️ Highlights: Chartres Cathedral, medieval old town"
              }
            }
          ],
          gridCols: 2
        },
        {
          title: "Dining Recommendations",
          icon: "utensils",
          content: [
            {
              heading: "Local Favorites",
              list: [
                { 
                  title: "Fish La Boissonnerie (6th Arr.)", 
                  description: "Excellent seafood in Saint-Germain-des-Prés"
                },
                { 
                  title: "Cocottes (7th Arr.)", 
                  description: "Near the Eiffel Tower, serving traditional French cuisine"
                },
                { 
                  title: "Chez Janou (3rd Arr.)", 
                  description: "Provence-inspired bistro in the Marais, known for Boeuf Bourguignon"
                },
                { 
                  title: "Le Train Bleu (12th Arr.)", 
                  description: "Spectacular Belle Époque decor inside Gare de Lyon"
                }
              ]
            },
            {
              heading: "Unique Dining Experiences",
              list: [
                { 
                  title: "L'Ange 20 (4th Arr.)", 
                  description: "Intimate setting with great food at reasonable prices"
                },
                { 
                  title: "Le Grand Véfour (1st Arr.)", 
                  description: "Historic restaurant in the Palais-Royal, offering a glamorous setting"
                }
              ]
            },
            {
              heading: "International Options",
              list: [
                { 
                  title: "Kubri (11th Arr.)", 
                  description: "Middle Eastern/African fusion dishes"
                },
                { 
                  title: "Yaya (various locations)", 
                  description: "Contemporary Greek cuisine"
                }
              ]
            },
            {
              note: {
                color: "green",
                title: "Dining Tips",
                list: [
                  "• Many restaurants are closed on Sundays and Mondays",
                  "• Lunch is typically served 12-2pm and dinner from 7-10pm",
                  "• Reservations are recommended, especially for popular spots",
                  "• Service charge is included in the bill (no additional tipping necessary)"
                ]
              }
            }
          ]
        },
        {
          title: "Purchasing Attraction Tickets",
          icon: "ticket",
          content: [
            {
              heading: "Official Websites",
              text: "Always purchase tickets from official attraction websites to avoid scams and markups:",
              list: [
                "Eiffel Tower: toureiffel.paris",
                "Louvre Museum: louvre.fr",
                "Paris tourist office: parisinfo.com"
              ],
              listStyle: "disc"
            },
            {
              heading: "Booking Timeline",
              text: "For popular attractions like the Eiffel Tower, book tickets up to 60 days in advance. Museum tickets can usually be purchased a few days before your visit, but booking ahead is recommended during peak season (June-August)."
            },
            {
              heading: "Museum Passes",
              text: "Consider the Paris Museum Pass for access to over 50 museums and monuments. Available in 2, 4, or 6-day options, it can save money if you plan to visit multiple sites."
            },
            {
              note: {
                color: "blue",
                title: "Free Admission Days",
                text: "Many museums offer free admission on the first Sunday of each month. The Louvre is free on the first Saturday evening of each month. Some museums are always free for visitors under 26 years old from the EU."
              }
            }
          ]
        },
        {
          title: "Navigo Découverte Pass Information",
          icon: "creditCard",
          content: [
            {
              heading: "Purchase Locations",
              text: "The Navigo Découverte pass can be purchased at:",
              list: [
                "Any Metro station with a ticket window",
                "Any RER station",
                "Major transport hubs (Charles de Gaulle Airport, Orly Airport, Gare du Nord)"
              ],
              listStyle: "disc"
            },
            {
              heading: "Requirements",
              text: "You'll need:",
              list: [
                "A passport-sized photo (25x30mm) - bring one or photos can be taken at some stations",
                "€5 for the card itself",
                "Additional fee for weekly (€22.80) or monthly pass depending on zones covered"
              ],
              listStyle: "disc"
            },
            {
              heading: "Coverage",
              text: "The pass covers all public transportation within the chosen zones in the Île-de-France region, including:",
              list: [
                "Metro",
                "RER",
                "Bus",
                "Tram",
                "Travel to attractions like Disneyland Paris and Versailles"
              ],
              listStyle: "disc"
            },
            {
              note: {
                color: "purple",
                title: "Important Note",
                text: "Weekly passes (Navigo Semaine) run Monday to Sunday regardless of when you buy them. For optimal value, purchase at the beginning of the week. Monthly passes are valid for the calendar month."
              }
            }
          ]
        },
        {
          title: "CDG Airport Information",
          icon: "mapPin",
          content: [
            {
              heading: "Lounge Options",
              text: "CDG offers several lounge options across its terminals:",
              list: [
                "Air France lounges in Terminal 2E (with Hall L being particularly well-equipped)",
                "Air Canada Maple Lounge in Terminal 2A",
                "Instant Lounge in Terminal 2E for pay-per-use access"
              ],
              listStyle: "disc"
            },
            {
              text: "Note: Access is typically restricted to passengers with boarding passes for flights departing from specific terminals."
            },
            {
              heading: "Transportation to Paris",
              list: [
                { 
                  title: "RER B Train", 
                  description: "Direct service to central Paris (25-35 minutes, €11.40)"
                },
                { 
                  title: "Roissybus", 
                  description: "Direct to Opera Garnier (60-75 minutes, €13.70)"
                },
                { 
                  title: "Taxi", 
                  description: "Fixed rate of €53 to Right Bank, €58 to Left Bank"
                },
                { 
                  title: "Private Transfer", 
                  description: "Various services available, book in advance"
                }
              ]
            },
            {
              note: {
                color: "red",
                title: "Travel Time Advisory",
                text: "Allow at least 3 hours before departure for international flights due to potential security lines. Terminal transfers can take 30-45 minutes if changing terminals is necessary."
              }
            }
          ]
        },
        {
          title: "Seasonal Tips & Local Customs",
          icon: "help",
          content: [
            {
              heading: "Best Time to Visit",
              list: [
                { 
                  title: "Spring (April-June)", 
                  description: "Mild weather, blooming gardens, moderate crowds"
                },
                { 
                  title: "Fall (September-October)", 
                  description: "Pleasant temperatures, fewer tourists, cultural events"
                },
                { 
                  title: "Summer (July-August)", 
                  description: "Warmest weather but most crowded; many locals on vacation"
                },
                { 
                  title: "Winter (November-March)", 
                  description: "Lowest prices and fewer crowds but cooler temperatures"
                }
              ]
            },
            {
              heading: "Local Customs",
              list: [
                "Always greet shop owners and staff with \"Bonjour\" when entering",
                "It's polite to use basic French phrases (merci, s'il vous plaît)",
                "Traditional meal times are later (lunch 12-2pm, dinner 7:30-10pm)",
                "Tipping is not required as service is included in prices",
                "Dress stylishly, especially when dining at nicer restaurants"
              ],
              listStyle: "disc"
            },
            {
              heading: "Safety Tips",
              list: [
                "Be aware of pickpockets in tourist areas and on public transport",
                "Keep a copy of your passport and important documents",
                "Use ATMs inside banks rather than on the street when possible",
                "For emergencies: Police (17), Ambulance (15), Fire (18), or EU-wide emergency (112)"
              ],
              listStyle: "disc"
            },
            {
              note: {
                color: "teal",
                title: "Pro Tips",
                list: [
                  "• Many museums are closed on either Monday or Tuesday",
                  "• The first Sunday of the month offers free entry to many museums",
                  "• Pharmacies (marked with a green cross) are good resources for minor health issues",
                  "• Water from drinking fountains (Wallace fountains) is safe to drink",
                  "• Public toilets are available throughout the city for a small fee (typically €0.50)"
                ]
              }
            }
          ]
        }]},
        bannerImages: [
          { 
            id: 1,
            src: "/attractions/effil.jpg", 
            number: 1,
            label: "Eiffel Tower Daytime View"
          },
          { 
            id: 2,
            src: "/attractions/seine-cruise.jpg", 
            number: 2,
            label: "Seine River Cruise"
          },
          { 
            id: 3,
            src: "Louvre.jpg", 
            number: 3,
            label: "Louvre Museum"
          },
          { 
            id: 4,
            src: "/attractions/seine-cruise.jpg", 
            number: 4,
            label: "Montmartre District"
          }
        ] ,
        metaTitle: 'Paris Tour Packages - Iconic Landmarks & Cultural Experiences',
        metaDescription: 'Explore Paris with our comprehensive tour packages. Visit Eiffel Tower, Louvre Museum, and more iconic landmarks with expert guides.',
        metaKeywords: 'Paris tours, France travel, Eiffel Tower, Louvre Museum, Paris packages'
      
  }
,  
// ====================================================================================
];
export const tourPackages = [
  "Group Tours",
   "FIT Tours",
   "MICE Tours",
   "Honeymoon Tours",
   "Luxury Tours",
   "Senior Citizen Tours",
   "City Breaks",
   "Multi City Packages",
   "Escorted Tours",
   "Rail Tours",
   "Self Drive Holidays",
   "Chauffeur Driven Tours"
 ];
 
 export const packageDescriptions = {
   "Group Tours": `Group Tours are perfect for travelers who enjoy exploring destinations with like-minded individuals. These tours offer a structured, pre-arranged itinerary, where a group of travelers shares experiences, making it ideal for those who love camaraderie and socializing. Whether you're visiting cultural landmarks, scenic areas, or historical sites, Group Tours offer the opportunity to bond with fellow travelers while enjoying guided sightseeing. The convenience of all logistics being handled for you, such as transportation, accommodations, and meals, ensures a stress-free and memorable vacation experience.`,
 
   "FIT Tours": `FIT (Foreign Independent Traveler) Tours are designed for individuals or small groups who prefer to travel independently but still want the benefits of having a carefully planned itinerary. These tours offer the flexibility of an independent journey while including essential services like accommodation, transportation, and sightseeing, tailored to your interests. FIT Tours are ideal for those who prefer a more personalized experience but without the need to organize every detail themselves.`,
 
   "MICE Tours": `MICE (Meetings, Incentives, Conferences, and Exhibitions) Tours are ideal for businesses and organizations looking to combine travel with corporate events. These tours are designed to provide unique experiences for business travelers, offering not only the best locations for conferences and meetings but also leisure activities that allow for relaxation and team-building. MICE Tours provide a seamless blend of professional and personal travel, making them perfect for corporate incentives, events, and group retreats.`,
 
   "Honeymoon Tours": `Honeymoon Tours offer newlyweds the perfect romantic getaway to start their married life. These tours are designed with relaxation, intimacy, and adventure in mind, offering destinations known for their romantic settings, such as pristine beaches, scenic mountain resorts, and historic cities. Whether you prefer a peaceful beach retreat, an adventurous hiking trip, or exploring cultural wonders, Honeymoon Tours are tailored to create lifelong memories for couples.`,
 
   "Luxury Tours": `Luxury Tours provide a high-end travel experience, offering top-tier accommodations, private transportation, exclusive experiences, and impeccable service. These tours are ideal for those who want to experience the finest that a destination has to offer, from five-star hotels and gourmet dining to private tours and first-class flights. With a focus on comfort, privacy, and personalized service, Luxury Tours ensure a luxurious and stress-free travel experience.`,
 
   "Senior Citizen Tours": `Senior Citizen Tours are specially designed for older travelers who want to enjoy a relaxed, comfortable, and enriching travel experience. These tours consider the specific needs and preferences of senior travelers, including easy-paced itineraries, accessible accommodations, and personalized service. Whether you're looking for cultural tours, nature experiences, or leisurely beach holidays, Senior Citizen Tours offer a perfect combination of relaxation and exploration tailored to older travelers.`,
 
   "City Breaks": `City Breaks are short, immersive vacations designed to help you experience the essence of a city in a limited time. These tours focus on exploring the city's highlights, such as historical landmarks, cultural attractions, local cuisine, and vibrant neighborhoods. City Breaks are perfect for those who have a busy schedule but still want to enjoy a quick getaway, offering the best way to discover a city's charm in a compact and exciting trip.`,
 
   "Multi City Packages": `Multi City Packages are perfect for travelers who want to explore multiple destinations in one seamless journey. These packages provide a rich variety of experiences, allowing you to visit different cities or countries while avoiding the hassle of booking separate trips. Whether you're embarking on a grand tour of a single region or exploring distant countries, Multi City Packages offer a comprehensive travel experience with diverse activities, attractions, and cultures.`,
 
   "Escorted Tours": `Escorted Tours offer a guided experience where a professional guide accompanies you throughout your journey. These tours are perfect for those who prefer a structured, organized travel experience with the convenience of having all logistics managed for you. From transportation and accommodations to guided sightseeing, Escorted Tours ensure that you get the most out of your trip with expert knowledge and seamless travel. Whether you're exploring a city, region, or country, Escorted Tours provide in-depth exploration without the stress of planning.`,
 
   "Rail Tours": `Rail Tours offer a unique and scenic way to travel, with the comfort of train travel combined with the opportunity to see breathtaking landscapes along the way. Whether it's through remote countryside or along iconic scenic routes, Rail Tours provide a relaxed and immersive experience. Traveling by train allows you to sit back, unwind, and enjoy the view, while passing through regions that are hard to access by other forms of transportation.`,
 
   "Self Drive Holidays": `Self Drive Holidays provide complete freedom and flexibility, allowing you to explore destinations at your own pace. With a rental car at your disposal, you have the autonomy to create your own itinerary, choose the routes, and stop wherever you like. Whether you're cruising along coastal roads, exploring rural towns, or venturing into hidden gems, Self Drive Holidays give you the independence to make your travel experience truly yours.`,
 
   "Chauffeur Driven Tours": `Chauffeur Driven Tours offer a luxurious and stress-free way to explore a destination. With a professional chauffeur at your service, you can relax and enjoy the sights without worrying about navigating unfamiliar roads or dealing with parking. These tours offer comfort, privacy, and a personalized experience, making them ideal for those seeking a high-end travel experience. Whether it's a city tour, a multi-day journey, or an exploration of a specific region, Chauffeur Driven Tours ensure that your travel is both luxurious and convenient.`
 };





// All available categories for reference and filtering
export const allCategories = [
  "adventure",
  "ancient",
  "art",
  "beach",
  "castle",
  "city",
  "cruise",
  "culture",
  "design",
  "family",
  "food-wine",
  "garden",
  "geothermal",
  "hiking",
  "historical",
  "island",
  "lake",
  "landmark",
  "luxury",
  "mountain",
  "museum",
  "nature",
  "nightlife",
  "northern-lights",
  "religious",
  "romantic",
  "royal",
  "scenic",
  "shopping",
  "spa",
  "spiritual",
  "theme-park",
  "trekking",
  "water-sports",
  "winter"
];

// Export both named and default exports
// export { packages };
export default packages;