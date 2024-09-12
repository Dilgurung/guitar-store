import blackTea from "../assets/products/yamaha.png";
import whiteTea from "../assets/products/fender.png";
import yellowTea from "../assets/products/classical.jpg";
import blackAndWhiteTea from "../assets/products/mantra.webp";
import blueTea from "../assets/products/enya.webp";
import blueberryTea from "../assets/products/ukelele.jpg";
import brownTea from "../assets/products/string.webp";
import chamomileTea from "../assets/products/capo.webp";
import coralTea from "../assets/products/pick.webp";
import ginsengTea from "../assets/products/gibson.webp";
import indigoTea from "../assets/products/bass.jpg";
import limegreenTea from "../assets/products/fender2.webp";
import magentaTea from "../assets/products/hex.jpg";
import neemTea from "../assets/products/amplifier.webp";
import orangeTea from "../assets/products/squier.png";
import puerhTea from "../assets/products/bag.webp";
import redTea from "../assets/products/strap.jpg";
import turquoiseTea from "../assets/products/tone.webp";

const Products = [
  {
    id: 1,
    brandName: "YAMAHA",
    image: blackTea,
    name: "Yamaha Guitar",
    price: "$560.00",
    category: "Accoustic",
    featured: false,
    slug: "yamaha-guitar",
    desc: "The FX310AII features a single-cutaway dreadnought body shape, which provides a balanced tone and good projection. The top is made of spruce, while the back and sides are constructed from meranti, a tonewood known for its balanced tonal properties.The AII in the model name indicates that the guitar is equipped with built-in electronics. The FX310AII comes with an onboard pickup system, typically featuring a piezo pickup and an active preamp with controls for volume, tone, and sometimes a built-in tuner. This allows you to amplify the guitar's sound when plugged into an amplifier or PA system.The neck of the FX310AII is usually made of nato or mahogany, depending on the specific version. It offers a comfortable profile for easy playability. The fingerboard is typically made of rosewood, providing a smooth surface for fretting and playing.",
  },

  {
    id: 2,
    brandName: "FENDER",
    image: whiteTea,
    name: "Fender",
    price: "$240.00",
    category: "Semi acoustic",
    featured: false,
    slug: "fender-guitar",
    desc: "A Fender semi-acoustic guitar combines the classic craftsmanship of Fender with the versatility of semi-hollow body design. Known for their warm, rich tones and comfortable playability, these guitars are favored by musicians across genres, from blues and jazz to rock and alternative. Featuring solid construction with hollowed sections to enhance resonance, they offer a distinctive sound that's both vibrant and full-bodied. Ideal for both studio recording and live performances, Fender semi-acoustic guitars are celebrated for their timeless style and enduring sound quality.",
  },

  {
    id: 3,
    brandName: "SQUIER",
    image: orangeTea,
    name: "Squier Guitar",
    price: "$200.00",
    category: "Electric",
    featured: false,
    slug: "squier-guitar",
    desc: "Squier electric guitars are renowned for offering high-quality instruments at an accessible price point, making them perfect for beginners and seasoned players alike. Produced by Fender, Squier guitars maintain Fender's iconic designs and craftsmanship standards, ensuring reliable performance and playability. They come in various models, from Stratocasters and Telecasters to Jaguars and Jazzmasters, each delivering classic tones and versatile sounds suitable for a wide range of musical styles. Squier guitars are celebrated for their affordability without compromising on quality, making them a popular choice for musicians looking for value and performance in their instruments.",
  },

  {
    id: 4,
    brandName: "MANTRA",
    image: blackAndWhiteTea,
    name: "Mantra Guitar",
    price: "$300.99",
    category: "Acoustic",
    featured: true,
    slug: "mantra-guitar",
    desc: "The Mantra acoustic guitar is known for its blend of craftsmanship, playability, and resonant sound. Designed to cater to both beginners and experienced players, it offers a warm and balanced tone, ideal for a variety of musical genres from folk and country to pop and rock. With a focus on quality materials and construction, Mantra guitars typically feature solid tops, comfortable neck profiles, and reliable hardware, ensuring durability and consistent performance. They are favored for their affordability while delivering a rich acoustic experience that meets the needs of discerning musicians.",
  },

  {
    id: 5,
    brandName: "GIBSON",
    image: ginsengTea,
    name: "Gibson Guitar",
    price: "$120.99",
    category: "Acoustic",
    featured: true,
    slug: "gibson-guitar",
    desc: "Gibson acoustic guitars are renowned for their craftsmanship, rich tonal quality, and iconic design. Built on a legacy of over a century, Gibson's acoustic guitars feature premium materials such as solid spruce or mahogany for the tops, offering a balanced and resonant sound. Known for their warm, full-bodied tones, these guitars are favored by musicians across genres from folk and blues to rock and country. They are crafted with meticulous attention to detail, often incorporating traditional hand-scalloped bracing and advanced pickup systems for amplified performance. Gibson acoustic guitars embody a blend of heritage and innovation, making them a top choice for both studio recording and live performances.",
  },

  {
    id: 6,
    brandName: "Manasalu",
    image: yellowTea,
    name: "Manasalu Guitar",
    price: "$150.00",
    category: "Classical",
    featured: false,
    slug: "classical-guitar",
    desc: "The Manasalu classical guitar is revered for its exceptional craftsmanship and rich, traditional sound. Handcrafted with precision and care, these guitars typically feature solid wood construction, such as spruce or cedar for the top and mahogany or rosewood for the back and sides, ensuring a warm and resonant tone. Known for their comfortable playability and refined aesthetics, Manasalu classical guitars are designed to meet the needs of serious classical guitarists and enthusiasts alike. They often incorporate traditional Spanish construction methods, such as fan bracing, to enhance the instrument's tonal characteristics and responsiveness. With a reputation for quality and attention to detail, Manasalu guitars are cherished by musicians seeking an authentic classical guitar experience.",
  },
  {
    id: 7,
    brandName: "HEX",
    image: magentaTea,
    name: "Hex Guitar",
    price: "$500.00",
    category: "Semi acoustic",
    featured: false,
    slug: "hex-guitar",
    desc: "The Hex Guitar semi-acoustic guitar combines modern design with versatile sound capabilities. Known for its sleek aesthetics and ergonomic build, it features a semi-hollow body design that enhances resonance and sustain. This type of guitar is favored for its ability to produce warm, rich tones suitable for a variety of musical genres, including jazz, blues, rock, and more. Typically equipped with high-quality pickups and electronics, Hex guitars offer flexibility for both amplified and acoustic performances. They are crafted with attention to detail, using premium woods like maple or mahogany for the body and neck, ensuring durability and comfort during extended play. Hex guitars appeal to musicians looking for a contemporary semi-acoustic instrument that delivers both style and substance.",
  },

  {
    id: 8,
    brandName: "ENYA",
    image: blueTea,
    name: "Enya Guitar",
    price: "$700.00",
    category: "semi-electric",
    featured: false,
    slug: "enya-guitar",
    desc: "Enya guitars are crafted using high-quality materials such as spruce, mahogany, or maple, ensuring both durability and excellent acoustic properties. They are equipped with advanced electronics and pickups, providing clarity and responsiveness whether played unplugged or amplified. Known for their comfort and playability, Enya semi-acoustic guitars cater to musicians who appreciate a blend of modern design, innovative features, and exceptional sound performance.",
  },

  {
    id: 9,
    brandName: "FENDER",
    image: limegreenTea,
    name: "Fender electric guitar",
    price: "$450.99",
    category: "electric",
    featured: true,
    slug: "fender-guitar",
    desc: "Fender electric guitars are iconic instruments renowned for their legendary sound, craftsmanship, and timeless design. Originating in the 1950s with models like the Stratocaster and Telecaster, Fender guitars have defined genres from rock and blues to country and jazz. Known for their comfortable playability and distinctive tones, Fender guitars typically feature single-coil or humbucker pickups that deliver bright, clear highs and rich, full-bodied lows.",
  },

  {
    id: 10,
    brandName: "FENDER",
    image: indigoTea,
    name: "Bass Guitar",
    price: "$200.00",
    category: "bass-electric",
    featured: false,
    slug: "electric-bass",
    desc: "Fender electric bass guitars are celebrated for their pivotal role in shaping modern music, offering a deep, powerful low-end foundation that's essential in various musical genres. From the iconic Precision Bass (P-Bass) to the versatile Jazz Bass (J-Bass), Fender bass guitars are known for their distinct tonal characteristics and reliable performance.",
  },

  {
    id: 11,
    brandName: "Manasalu",
    image: blueberryTea,
    name: "Ukelele Guitar",
    price: "$45.00",
    category: "acoustic",
    featured: false,
    slug: "ukelele-guitar",
    desc: "The Manasalu ukulele is a finely crafted instrument known for its exceptional quality and delightful sound. Designed with meticulous attention to detail, these ukuleles typically feature solid wood construction, such as spruce or mahogany for the top, and mahogany or rosewood for the back and sides, ensuring a warm and resonant tone.",
  },

  {
    id: 12,
    brandName: "DADDARIO",
    image: brownTea,
    name: "String",
    price: "$8.00",
    category: "acoustic-string",
    featured: false,
    slug: "string",
    desc: "The D'Addario acoustic phosphor bronze strings are made from a copper and zinc alloy with a small amount of phosphorus, offering a warm, balanced tone with a bright top end. They are known for their durability and long lifespan, and are available in various gauges to suit different playing styles. A reliable and versatile choice for acoustic guitar players.",
  },
  {
    id: 13,
    brandName: "KEPMA",
    image: puerhTea,
    name: "Guitar Bag",
    price: "$12.99",
    category: "bag",
    featured: true,
    slug: "guitar-bag",
    desc: "Kepma offers a range of guitar bags designed to provide protection and transportation for your guitar. These bags are typically made of durable materials and feature padding to safeguard your instrument against bumps and scratches. The specific features and design may vary depending on the model and size of the bag.Kepma guitar bags feature adjustable shoulder straps, allowing you to carry the bag comfortably on your back.",
  },
  {
    id: 14,
    brandName: "Blackstar Debut ",
    image: neemTea,
    name: "Blackstar Debut 10E",
    price: "$120.99",
    category: "Amplifier",
    featured: false,
    slug: "amplifier-guitar",
    desc: "The Blackstar Debut 10E is a 10-watt combo practice amplifier. Even at lower volumes, the speaker-emulated output of the Debut 10E produces the sound of a milked-up cabinet. The Debut 10E's straightforward, all-analog architecture produces clean and overdrive tones that sound natural.",
  },
  {
    id: 15,
    brandName: "DADDARIO NS ",
    image: chamomileTea,
    name: "DADDARIO NS ARTIST CAPO",
    price: "$7.99",
    category: "Capo",
    featured: true,
    slug: "guitar-capo",
    desc: "The D'Addario NS Artist Capo (PW-CP-10) is a durable, aircraft-grade aluminum capo for use with acoustic and electric guitars. Its micrometer tension adjustment and sleek, ergonomic design make it perfect for live performance situations",
  },
  {
    id: 16,
    brandName: "DADDARIO",
    image: coralTea,
    name: "Daddario pick",
    price: "$1.00",
    category: "pick",
    featured: false,
    slug: "guitar-pick",
    desc: "D'Addario offers a pick with a thickness of 1.20mm. These picks are made from high-quality materials and are designed to provide a firm grip and durability. The 1.20mm thickness offers a balanced combination of flexibility and rigidity, allowing for precise control and a versatile playing experience. Whether you're strumming chords or playing intricate lead lines, the D'Addario 1.20mm pick can provide the stability and response you need.",
  },
  {
    id: 17,
    brandName: "CHERUB G",
    image: turquoiseTea,
    name: "Tone Acoustic",
    price: "$20.00",
    category: "Tea",
    featured: false,
    slug: "coral-tea",
    desc: "Escape to Paradise: Let your taste buds travel to the tropics with the vibrant flavors of coral tea. Hibiscus flowers and other exotic fruits infuse this brew with a sweet, tangy taste, offering a refreshing getaway in every sip.",
  },
  {
    id: 18,
    brandName: "Fender Sonoran ",
    image: redTea,
    name: " Guitar Strap",
    price: "$9.99",
    category: "strap/belt",
    featured: true,
    slug: "guitar-belt",
    desc: "is a durable and comfortable strap for guitars. It is made of polypropylene, has a 2-inch width, and an adjustable length of 35 to 59.5 inches. It provides classic look, and it features a shoulder pad for added comfort. The strap securely attaches to your guitar with plastic buckles and is compatible with most acoustic, electric, and bass guitars.",
  },
];

export default Products;
