import { Levent } from "../types/levent";
import { Post } from "../types/post";
import { User } from "../types/user";

const userBailey: User = {
  name: "David Bailey",
  npubkey: "npub1baileyl00qaasakjhdsfa09ufon",
  handle: "bailey",
  peers: 506,
  description: `Eternal Optimist, Builder, Backer, Vagrant, Evangelist, Nerd, CEO @bitcoinmagazine @TheBitcoinConf @UTXOmgmt @EarnWithBM All in on hyperbitcoinization.`,
  avatar:
    "https://pbs.twimg.com/profile_images/1732220592273690624/4LABU2zz_400x400.jpg",
  experiences: [
    "bitcointokyo23",
    "bitcoinasia24",
    "pubkeybd",
    "bitcoinlondon23",
    "xfilesartproject",
  ],
};

const userAgarcia: User = {
  name: "Andre Garcia",
  npubkey: "npub1agarcia23a7ga3rciau3si9ngl6oo68qa9app4",
  handle: "agarcia",
  peers: 262,
  avatar:
    "https://images.unsplash.com/photo-1530555695-3941de4bf5a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description:
    "Passionate art curator with a keen eye for avant-garde masterpieces, dedicated to fostering cultural dialogue through thought-provoking exhibitions and innovative curation.",
  experiences: ["wi-tahin", "exponyc"],
};

const userSmith: User = {
  name: "Alice Smith",
  npubkey: "npub1alicesmith0987sd9f80a9sf8sa",
  handle: "asmith",
  peers: 342,
  description:
    "Crypto Enthusiast, Blockchain Developer, Coffee Lover, Advocate for Decentralization, Founder @CryptoInnovate, exploring the intersection of technology and finance.",
  avatar:
    "https://images.unsplash.com/photo-1596815070908-b542a256e9fe?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  experiences: ["bitcointokyo23", "exponyc", "filmfestnyc24"],
};

const userChang: User = {
  name: "Javier Chang",
  npubkey: "npub1jvchang32sdf87sdf0a9sdf8",
  handle: "jvchang",
  peers: 245,
  description:
    "Digital Nomad, Blockchain Journalist, Explorer of the Crypto Frontier, Editor-in-Chief @CryptoExplorerMag, always chasing the next big story.",
  avatar:
    "https://images.unsplash.com/photo-1704570249452-c45247dd2b6e?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  experiences: ["bitcointokyo23", "bitcoinasia24", "pubkeybd", "filmfestnyc24"],
};

const userNoumerre: User = {
  name: "Francois Noumerre",
  npubkey: "npub1j432kndsadsaknoumerre2sdf87sdf0a9sdf8",
  handle: "noumerre.sats",
  peers: 17,
  description: "Stack sats & play hard.",
  avatar:
    "https://images.unsplash.com/photo-1698365039593-5180c517bb96?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  experiences: ["bitcointokyo23", "bitcoinlondon23", "artexpoparis24"],
};

const userFulder: User = {
  name: "Mox Fulder",
  npubkey: "npub1mulderl00qaasakjhdsfa09ufon",
  handle: "fulder",
  peers: 42,
  description: `Dedicated investigator of the unexplained and holder of a degree in Paranormal Studies, Fox Mulder brings a unique perspective to the world of mysteries. Organizer of the X Files Art Project Exhibition, exploring the intersection of art and the unknown.`,
  avatar:
    "https://images.unsplash.com/photo-1694106192312-08d813b3d2ef?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  experiences: ["xfilesartproject", "wi-tahin"],
};

const users = [
  userBailey,
  userAgarcia,
  userSmith,
  userChang,
  userNoumerre,
  userFulder,
];

const leventBitcoinHongKong: Levent = {
  id: "bitcoinasia24",
  name: "bitcoinasia 2024",
  startDate: new Date(2024, 3, 22).toISOString(),
  endDate: new Date(2024, 3, 24).toISOString(),
  description: `Bitcoin Asia 2024, the premier blockchain and cryptocurrency event in the Asian region, is set to be a groundbreaking experience for industry leaders, enthusiasts, and innovators alike.

  This three-day summit, held in the vibrant city of Hong Kong, will delve into the latest advancements in blockchain technology, digital asset management, and the evolving landscape of decentralized finance. With a focus on fostering collaboration and knowledge exchange, Bitcoin Asia 2024 aims to provide a platform for attendees to explore the limitless possibilities and transformative potential of the blockchain ecosystem.

  Renowned experts and thought leaders from the crypto space will share their insights through engaging panel discussions, keynote presentations, and interactive workshops. Whether you are a seasoned professional, a blockchain developer, or someone intrigued by the world of cryptocurrencies, Bitcoin Asia 2024 promises to be a hub of inspiration and a catalyst for driving innovation in the ever-evolving blockchain industry.

  Don't miss this opportunity to be part of a global community shaping the future of finance and technology. Join us in Hong Kong and be at the forefront of the digital revolution.`,
  visitorCount: 271,
  previewImage:
    "https://assets-global.website-files.com/6488b0b0fcd2d95f6b83c9d4/6571b94ee6af410a48baa5a6_hk_00-andres-garcia-OgrfLCYqfVY-unsplash.jpg",
  organizer: userBailey,
  location: {
    label: "Hong Kong",
    lat: 22.2789953,
    lon: 114.17097166666667,
  },
};

const leventPeruviana: Levent = {
  id: "wi-tahin",
  name: "Wi Tahin: SESSAMPASTE Exhibition",
  startDate: new Date(2024, 2, 10).toISOString(),
  endDate: new Date(2024, 5, 24).toISOString(),
  description: `Embark on a journey into the captivating world of artistic innovation at the 'Wi Tahin: SESSAMPASTE Exhibition,' a unique and immersive event that pushes the boundaries of creativity and cultural expression. This groundbreaking exhibition brings together a diverse array of artists, showcasing their talents and exploring the intersection of tradition and modernity.

  The SESSAMPASTE Exhibition, named after the indigenous term for "harmony," serves as a platform for artists from various backgrounds to converge and present their interpretations of harmony through visual arts, installations, and interactive displays. The event aims to foster a deeper understanding of cultural diversity and the interconnectedness of global artistic narratives.
  
  Visitors to Wi Tahin will have the opportunity to witness the convergence of traditional techniques and cutting-edge technologies as artists experiment with mediums, materials, and concepts. The exhibition space will be transformed into a dynamic landscape where each piece tells a story, reflecting the artists' unique perspectives on unity, diversity, and the human experience.
  
  Artists participating in Wi Tahin hail from different corners of the globe, contributing to the rich tapestry of creative expressions that define the exhibition. From indigenous crafts to contemporary digital art, the SESSAMPASTE Exhibition celebrates the power of artistic expression to transcend boundaries and build bridges between cultures.
  
  In addition to the visual spectacle, Wi Tahin will feature interactive workshops, artist talks, and performances, allowing attendees to engage directly with the creative process and gain insights into the inspirations behind each masterpiece. This event is not just a display of art; it is an immersive experience that encourages dialogue, connection, and a celebration of the shared human experience.
  
  Wi Tahin: SESSAMPASTE Exhibition invites art enthusiasts, cultural explorers, and the curious-minded to join in this celebration of creativity and diversity. Experience the harmonious blend of tradition and innovation, where art becomes a universal language that speaks to the heart and soul of humanity.`,
  visitorCount: 55,
  previewImage:
    "https://www.gannett-cdn.com/-mm-/5c68917db80eec280d07352d0c01fee18634be0b/c=17-0-7663-4320/local/-/media/2016/09/13/WIGroup/Appleton/636093672521272265-FCEC-Rendering1.jpg?width=3200&height=1809&fit=crop&format=pjpg&auto=webp",
  organizer: userAgarcia,
  location: {
    label: "New York City",
    lat: 40.7274946,
    lon: -73.97928,
  },
};

const leventNYC1: Levent = {
  id: "exponyc",
  name: "EXPO NYC",
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  description: `EXPO NYC is a dynamic and vibrant annual event that showcases the best of art, technology, innovation, and culture in the heart of New York City. Bringing together a diverse array of industries and talents, the event serves as a platform for networking, collaboration, and the exchange of ideas. Attendees can expect to explore cutting-edge technologies, experience thought-provoking art installations, and engage with industry leaders and experts through panel discussions and workshops. With a focus on fostering creativity and pushing boundaries, EXPO NYC has become a must-attend gathering for individuals and businesses seeking inspiration and insight into the latest trends and developments across various sectors. Whether you're a tech enthusiast, art aficionado, or simply curious about the forefront of innovation, EXPO NYC offers a unique and immersive experience that reflects the dynamic spirit of the city that never sleeps.`,
  visitorCount: 1255,
  previewImage:
    "https://images.unsplash.com/photo-1586483567820-10d1c5f744d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  organizer: userAgarcia,
  location: {
    label: "New York City",
    lat: 40.7474946,
    lon: -73.942042,
  },
};

const leventNYC2: Levent = {
  id: "pubkeybd",
  name: "Pubkey Birthday Party",
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  description: `Pubkey Birthday is an annual celebration dedicated to the world of cryptography, digital security, and the fascinating realm of public key infrastructure. This event brings together professionals, enthusiasts, and innovators to commemorate the significance of public key cryptography in securing our digital lives. Attendees can expect engaging discussions on the latest advancements in cryptographic protocols, key management strategies, and the evolving landscape of cybersecurity. The celebration may include interactive workshops, keynote speeches from industry leaders, and showcases of groundbreaking technologies that leverage public key infrastructure. Pubkey Birthday serves as a reminder of the pivotal role that public key cryptography plays in safeguarding our online communications, transactions, and data. It's a unique opportunity for individuals passionate about digital security to come together, exchange ideas, and collectively contribute to shaping the future of secure communication in the digital age.`,
  visitorCount: 21,
  previewImage:
    "https://pubkey.bar/_next/image?url=%2Fimages%2Fhomepage%2Fbartender.gif&w=3840&q=75",
  organizer: userChang,
  location: {
    label: "New York City",
    lat: 40.732185,
    lon: -74.0000205,
  },
};

const leventNYC3: Levent = {
  id: "wolf-meetup",
  name: "Wolf BTC Meetup",
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  description: `Join the Wolfnyc Bitcoin (BTC) Meetup, a gathering of cryptocurrency enthusiasts, traders, and blockchain professionals in the heart of Manhattan. Hosted by the passionate team at Wolfnyc, this event promises an engaging atmosphere for networking, knowledge sharing, and fostering connections within the vibrant Bitcoin community.`,
  visitorCount: 57,
  previewImage:
    "https://assets-global.website-files.com/63000f8c148cfc1043c6b8e2/634aec39a42202126bd2f9e4_Wolf-Opengraph.jpg",
  organizer: userSmith,
  location: {
    label: "New York City",
    lat: 40.7528733,
    lon: -73.97905,
  },
  AOA: "73bfe4160dd2a73dfbc8e3cbeab50d14380b0a3f5777f4f216177f4bb1c1e140i0",
};

const bitcoinTokyo: Levent = {
  id: "bitcointokyo23",
  name: "Bitcoin Tokyo 23",
  startDate: new Date(2023, 2, 2, 10).toISOString(),
  endDate: new Date(2023, 2, 5, 15).toISOString(),
  description:
    "Unveiling the future of decentralized finance, this event promises an immersive experience in the heart of Tokyo, merging cutting-edge blockchain technology discussions, expert insights, and vibrant networking opportunities, creating a pivotal moment for the global cryptocurrency community.",
  visitorCount: 285,
  previewImage:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  organizer: userSmith,
  location: {
    label: "Tokyo",
    lat: 35.6415142,
    lon: 139.6188922,
  },
  AOA: "4ec725ac4efd43067dc5de8ec08edd2d685a1dcd078cf75b84754904d4ea7bfei0",
};

const leventArtExpoParis: Levent = {
  id: "artexpoparis24",
  name: "Art Expo Paris 2024",
  startDate: new Date(2024, 6, 15, 9).toISOString(),
  endDate: new Date(2024, 6, 18, 18).toISOString(),
  description:
    "Art Expo Paris 2024 invites art enthusiasts, collectors, and industry professionals to immerse themselves in a diverse showcase of contemporary art, featuring both emerging and established artists from around the world.",
  visitorCount: 1200,
  previewImage:
    "https://images.unsplash.com/photo-1660914256311-918659fae88f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  organizer: userNoumerre,
  location: {
    label: "Paris",
    lat: 48.8566,
    lon: 2.3522,
  },
};

const leventBitcoinLondon: Levent = {
  id: "bitcoinlondon23",
  name: "Bitcoin London 2023",
  startDate: new Date(2023, 4, 10, 8).toISOString(),
  endDate: new Date(2023, 4, 12, 17).toISOString(),
  description: `
 Prepare to delve into the epicenter of the digital financial revolution at the Bitcoin London 2023 Conference – a groundbreaking event that brings together the brightest minds, pioneers, and enthusiasts shaping the future of decentralized finance. Set against the backdrop of one of the world's most dynamic financial hubs, this conference is poised to be an unmissable experience for anyone passionate about the transformative power of cryptocurrencies, especially Bitcoin.
 
 Hosted in the heart of London, the Bitcoin London 2023 Conference promises a convergence of innovation, inspiration, and insight. Attendees will have the unique opportunity to engage with leading experts, thought leaders, and industry insiders who are driving the evolution of blockchain technology and reshaping the global financial landscape.
 
 Explore a dynamic agenda featuring keynote presentations, panel discussions, and hands-on workshops covering a spectrum of topics – from the latest developments in blockchain technology to regulatory trends and the practical applications of Bitcoin in various industries. Gain invaluable knowledge from visionaries who are at the forefront of shaping the next chapter in the evolution of finance.
 
 Networking opportunities abound, providing a platform for like-minded professionals, entrepreneurs, investors, and enthusiasts to connect, collaborate, and forge partnerships. Whether you're a seasoned crypto veteran or a newcomer eager to learn, the Bitcoin London 2023 Conference caters to all levels of expertise, fostering an inclusive environment for the exchange of ideas.
 
 As Bitcoin continues to redefine the future of money, the conference serves as a beacon for those seeking to understand, adapt, and thrive in this ever-evolving landscape. Immerse yourself in the energy of innovation, discover new possibilities, and contribute to the ongoing conversation that is shaping the destiny of digital finance.
 
 Join us at the Bitcoin London 2023 Conference – where the pioneers of the blockchain revolution gather to discuss, debate, and define the future of finance. This is your chance to be part of a historic moment that transcends borders and propels us into a new era of financial empowerment and technological advancement.`,
  visitorCount: 400,
  previewImage:
    "https://images.unsplash.com/photo-1476958526483-36efcaa80b1b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  organizer: userBailey,
  location: {
    label: "London",
    lat: 51.509865,
    lon: -0.118092,
  },
  AOA: "0ddbaa0f5237492d329444997e0087c8b230005895d5439deba3bb6ec3a84ee6i0",
};

const leventFilmFestivalNYC: Levent = {
  id: "filmfestnyc24",
  name: "NYC Film Festival 2024",
  startDate: new Date(2024, 9, 5, 12).toISOString(),
  endDate: new Date(2024, 9, 12, 22).toISOString(),
  description: `The NYC Film Festival 2024 celebrates the art of filmmaking, showcasing a diverse selection of compelling films from around the globe, providing a platform for both emerging and established filmmakers to share their stories.
  
   Immerse yourself in a week-long cinematic experience, featuring screenings, Q&A sessions with filmmakers, and special events that highlight the creativity and innovation within the world of film. From thought-provoking documentaries to captivating narratives, the NYC Film Festival promises to captivate audiences and foster a deeper appreciation for the art of storytelling through film.`,
  visitorCount: 800,
  previewImage:
    "https://images.unsplash.com/photo-1704585056601-1957da0ad8c5?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  organizer: userChang,
  location: {
    label: "New York City",
    lat: 40.7128,
    lon: -74.006,
  },
};

const leventXFilesArtProject: Levent = {
  id: "xfilesartproject",
  name: "0x17 Files Expo",
  startDate: new Date(2023, 5, 8, 10).toISOString(),
  endDate: new Date(2023, 5, 12, 20).toISOString(),
  description: `Embark on a journey into the mysterious and otherworldly at the X Files Art Project Exhibition, a unique and immersive art experience that pays homage to the iconic TV series.

    Held in the heart of Roswell, New Mexico, this exhibition brings together a curated collection of artworks inspired by the supernatural, extraterrestrial, and paranormal themes explored in the X-Files. Talented artists from around the globe will showcase their interpretations through paintings, sculptures, installations, and multimedia exhibits.

    Engage with the unexplained, delve into the realm of conspiracy, and witness the convergence of art and the unknown. The X Files Art Project Exhibition invites you to explore the mysteries that lie beyond our understanding and celebrate the cultural impact of one of the most influential sci-fi series in television history.

    Whether you're a fan of the X-Files or simply intrigued by the enigmatic, this exhibition promises an unforgettable experience that blurs the boundaries between reality and the unexplored.`,
  visitorCount: 21,
  previewImage:
    "https://images.unsplash.com/photo-1578031016868-b0fd69be8fb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  organizer: userFulder,
  location: {
    label: "Roswell",
    lat: 33.3943,
    lon: -104.523,
  },
  AOA: "ca5c0a9820fd924f76f24e0002e6e5e3565d4a3f445512eb0720fa105de9550di0",
};

const leventsNYC = [leventNYC1, leventNYC2, leventNYC3];

const levents = [
  leventBitcoinHongKong,
  leventPeruviana,
  bitcoinTokyo,
  leventFilmFestivalNYC,
  leventBitcoinLondon,
  leventArtExpoParis,
  leventXFilesArtProject,
  ...leventsNYC,
];

const posts: Array<Post> = [
  {
    id: "0",
    text: "Excited to be part of Bitcoin Asia 2024 in Hong Kong! Join me for insightful discussions on blockchain, digital mining, and the future of decentralized finance. Looking forward to connecting with industry leaders and fellow enthusiasts.",
    author: userBailey,
    levent: leventBitcoinHongKong,
    timestamp: new Date(2024, 0, 4, 15).toISOString(),
  },
  {
    id: "5",
    text: "🎨 Absolutely in love with the concept of EXPO NYC! 🌟 \n\n Calling all my friends to join me in the heart of New York City for an immersive experience that blends art, technology, and innovation. Let's explore cutting-edge technologies, marvel at thought-provoking art installations, and engage with industry leaders. This annual event is not to be missed! ",
    author: userSmith,
    levent: leventNYC1,
    media:
      "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2lkczdsanVlbHZia3R2ejIxYmZsZDA4eW1oZTMwYno1cmJhMTR4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2sZCbFxWAMtK4uil6F/giphy.gif",
    timestamp: new Date().toISOString(),
  },

  {
    id: "9",
    text: "🚀 HODL up, fellow Bitcoin fam! 🌐 \n Pubkey Birthday, the ultimate celebration of cryptographic brilliance, is upon us! 🎉🔐 \n\n Secure those keys, ignite your nodes, and let's party like it's a blockchain block party! 🍾🎂  ",
    author: userChang,
    levent: leventNYC2,
    timestamp: new Date().toISOString(),
  },
  {
    id: "1",
    text: "We are opening a new exhibition at Peruvian Cafe this Saturday! Come at 18.00 for the vernissage!",
    author: userAgarcia,
    levent: leventPeruviana,
    media:
      "https://i.pinimg.com/originals/05/6b/0a/056b0ab04716fc8c1278f25cdc813381.jpg",
    timestamp: new Date(2024, 0, 1, 15, 46).toISOString(),
  },
  {
    id: "4",
    text: "🚀 Excited to be visiting Bitcoin Asia 2024 in Hong Kong soon! 🌏 \n Let's explore the future of blockchain technology, digital asset management, and decentralized finance together. This three-day summit promises to be a hub of innovation, bringing together industry leaders and enthusiasts to discuss the latest trends and advancements in the crypto space. Let's shape the future of finance together! #BitcoinAsia #BlockchainInnovation #HongKongCrypto",
    author: userSmith,
    levent: leventBitcoinHongKong,
    timestamp: new Date(2024, 8, 16, 10, 30).toISOString(),
  },
  {
    id: "7",
    text: " Hey darlings, it's Andre Garcia channeling myself at EXPO NYC! \n\n Brace yourselves for a collision of avant-garde art, tech wizardry, and the electric pulse of NYC! 🚀 \n Let's transcend the ordinary and paint the town with creativity. Join me in this kaleidoscopic celebration where innovation becomes the ultimate masterpiece! ",
    author: userAgarcia,
    levent: leventNYC1,
    timestamp: new Date().toISOString(),
  },
  {
    id: "12",
    text: "Get ready to be captivated by the magic of cinema at its finest! I invite you to join me on a cinematic journey where each frame unfolds like brushstrokes, crafting narratives that transcend the ordinary. \n\n Each film is a masterpiece, painted with the hues of emotion and the essence of storytelling. Together, let's explore the profound artistry of filmmaking, where every scene is a stroke of brilliance. ",
    author: userChang,
    levent: leventFilmFestivalNYC,
    media:
      "https://images.unsplash.com/photo-1603092254503-cfeeb2bbdeed?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: new Date().toISOString(),
  },
  {
    id: "17",
    text: "Anticipating the captivating experience at the upcoming Paris Art Expo. It promises to be a profound celebration of artistic expression, where each canvas will tell a unique story. The rich cultural atmosphere of Paris will undoubtedly serve as a fitting backdrop for this immersive journey. Eagerly looking forward to gaining inspiration during this cultural exploration.",
    author: userNoumerre,
    levent: leventArtExpoParis,
    timestamp: new Date(2023, 5, 15, 14, 15).toISOString(),
  },
  {
    id: "18",
    text: "Looking forward to attending the upcoming Wolf NYC Bitcoin Meetup! \n\nA great opportunity to connect with fellow cryptocurrency enthusiasts, traders, and blockchain professionals. Excited about the chance to network, share knowledge, and foster connections within the Bitcoin community. See you there! #WolfNYCMeetup ",
    author: userSmith,
    levent: leventNYC3,
    timestamp: new Date().toISOString(),
  },
  {
    id: "15",
    text: "Thrilled to have been part of the incredible Bitcoin London 2023! 🌐🚀 \n\nEngaging discussions on the future of decentralized finance, blockchain innovations, and the evolving crypto landscape. It was a privilege connecting with like-minded individuals and industry leaders. Until the next Bitcoin event! #BitcoinLondon2023 ",
    author: userNoumerre,
    levent: leventBitcoinLondon,
    media:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: new Date(2023, 7, 11, 9, 30).toISOString(),
  },
  {
    id: "3",
    text: "👁️ Who's ready to delve into the mysterious world of Wi Tahin: SESSAMPASTE Exhibition? 👁️ \n\n Join me this Saturday at East 11th Street 601, New York City. Let's explore the intricate sculptures, ponder on the impermanence of life, and uncover the hidden meanings behind each stearin bird. Are you in for an evening of artistic mysteries? #WiTahinExhibition #ArtMysteries #NYCArtScene",
    author: userFulder,
    levent: leventPeruviana,
    media:
      "https://images.unsplash.com/photo-1510520001634-6af954f45759?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: new Date(2024, 2, 9, 16, 15).toISOString(),
  },
  {
    id: "14",
    text: "Reflecting on the impactful discussions and insights at Bitcoin London 2023! Engaging sessions on the latest in blockchain technology, digital finance, and crypto trends. Grateful for the connections made and the forward-looking perspectives shared. Until next time, London! \n\n#BitcoinLondon2023 #BlockchainRevolution",
    author: userBailey,
    levent: leventBitcoinLondon,
    timestamp: new Date(2023, 7, 10, 18, 45).toISOString(),
  },
  {
    id: "6",
    text: "Flashback to the unforgettable Bitcoin Tokyo 2023 experience... \n\nIt was in the heart of Tokyo where I first discovered the transformative power of Bitcoin. The vibrant discussions on decentralized finance, expert insights, and the dynamic networking opportunities left a lasting impact. I made tons of new friends who share the passion for blockchain technology. Grateful for the connections made and excited for the future of decentralized finance! #BitcoinTokyo2023 #CryptoJourney #BlockchainCommunity",
    author: userSmith,
    levent: bitcoinTokyo,
    media:
      "https://images.unsplash.com/photo-1610219201631-6dfded82e8d8?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    timestamp: new Date(2023, 2, 8, 14, 45).toISOString(),
  },
  {
    id: "2",
    text: `    👽 Join me, Fox Mulder, in Roswell, New Mexico, this June for an extraordinary journey into the unknown. Immerse yourself in a captivating collection of artworks inspired by the paranormal, extraterrestrial, and mysterious themes explored in the X-Files TV series.`,
    author: userFulder,
    levent: leventXFilesArtProject,
    timestamp: new Date(2023, 5, 1, 12, 30).toISOString(),
  },
];

export {
  leventBitcoinHongKong,
  leventNYC1,
  leventPeruviana,
  leventsNYC,
  userAgarcia,
  userBailey,
  posts,
  levents,
  users,
};
