import { Levent } from "../types/levent";
import { Post } from "../types/post";
import { User } from "../types/user";

const userBailey: User = {
  name: "David Bailey",
  npubkey: "npub1baileyl00qaasakjhdsfa09ufon",
  handle: "bailey",
};

const userAgarcia: User = {
  name: "Andre Garcia",
  npubkey: "npub1agarcia23a7ga3rciau3si9ngl6oo68qa9app4",
  handle: "agarcia",
};

const leventBitcoinHongKong: Levent = {
  id: "0",
  name: "bitcoinasia 2024",
  startDate: new Date(2024, 3, 22).toISOString(),
  endDate: new Date(2024, 3, 24).toISOString(),
  description: `BITMAIN - the world's leading manufacturer of digital currency mining servers through its brand ANTMINER, will host the 2023 World Digital Mining Summit (WDMS 2023) in Hong Kong from September 22nd to 23rd, 2023. This summit's theme is "Mining for the Bull Market," aiming to help clients strategize their mining operations in advance to reap the benefits of the future bull market.
  
    The summit will introduce the ANTMINER S21 miner for the first time, boasting unparalleled hash rate and performance, leading the global mining industry into the 1xJ/T era. Since its inception, BITMAIN has always been at the forefront of the industry, leading each technological breakthrough and innovation. From the first breakthrough of 100J/T with the S9 to the 34.5J/T of the S19, the 29.5J/T of the S19 Pro, the 21.5J/T of the S19XP, and the 20.8J/T of the S19XP Hyd., ANTMINER remains true to its original mission, always leading the pack.
    
    Furthermore, as a token of appreciation to its customers and to promote long-term companionship and win-win partnership, the summit will offer numerous benefits to attendees. BITMAIN will launch a customer loyalty points system. Customers can use these points to apply for a free credit limit on the S21, allowing them to start mining before making payments. They can also use the points to redeem exclusive discount coupons for the ANTMINER S21 and enjoy optimal discounts. Stay tuned for more surprises!`,
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
  id: "1",
  name: "Wi Tahin: SESSAMPASTE Exhibition",
  startDate: new Date(2024, 2, 10).toISOString(),
  endDate: new Date(2024, 5, 24).toISOString(),
  description: `Skissernas Museum – Museum of Artistic Process and Public Art – will present a solo exhibition by Fredrik Strid in the spring and summer of 2024. The starting point for the exhibition Making Nature is the process-based sculpture project Alla fåglar i Sverige (All Birds of Sweden). The project, which the artist has been working on since 2018, will be shown here in its entirety for the first time. The extensive installation consists of all the 274 bird species found in Sweden, which have been modelled at full scale in clay and then cast to create candles in white stearin (candle wax). The stearin birds are presented using a specially made shelf system that takes up a large part of the exhibition space. The work becomes a kind of natural history collection. All the birds have a label showing the species name and are arranged in a way that brings to mind the presentation of animals in old natural history museums. The fragile stearin birds create a materiality that leads to reflections on impermanence.`,
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
  id: "2",
  name: "EXPO NYC",
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  description: `EXPO NYC is a dynamic and vibrant annual event that showcases the best of art, technology, innovation, and culture in the heart of New York City. Bringing together a diverse array of industries and talents, the event serves as a platform for networking, collaboration, and the exchange of ideas. Attendees can expect to explore cutting-edge technologies, experience thought-provoking art installations, and engage with industry leaders and experts through panel discussions and workshops. With a focus on fostering creativity and pushing boundaries, EXPO NYC has become a must-attend gathering for individuals and businesses seeking inspiration and insight into the latest trends and developments across various sectors. Whether you're a tech enthusiast, art aficionado, or simply curious about the forefront of innovation, EXPO NYC offers a unique and immersive experience that reflects the dynamic spirit of the city that never sleeps.`,
  visitorCount: 1255,
  previewImage:
    "https://2.bp.blogspot.com/-0F9zdv3B9p0/WYKgAYrX_bI/AAAAAAAANn4/kwSJdFc9_XwpEsEx1ZhqKMDbHgOdLq0ggCLcBGAs/s1600/1939_New_York_World_Fair%2B%25281%2529.jpg",
  organizer: userAgarcia,
  location: {
    label: "New York City",
    lat: 40.7474946,
    lon: -73.942042,
  },
};

const leventNYC2: Levent = {
  id: "3",
  name: "Pubkey Birthday Party",
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  description: `Pubkey Birthday is an annual celebration dedicated to the world of cryptography, digital security, and the fascinating realm of public key infrastructure. This event brings together professionals, enthusiasts, and innovators to commemorate the significance of public key cryptography in securing our digital lives. Attendees can expect engaging discussions on the latest advancements in cryptographic protocols, key management strategies, and the evolving landscape of cybersecurity. The celebration may include interactive workshops, keynote speeches from industry leaders, and showcases of groundbreaking technologies that leverage public key infrastructure. Pubkey Birthday serves as a reminder of the pivotal role that public key cryptography plays in safeguarding our online communications, transactions, and data. It's a unique opportunity for individuals passionate about digital security to come together, exchange ideas, and collectively contribute to shaping the future of secure communication in the digital age.`,
  visitorCount: 21,
  previewImage:
    "https://pubkey.bar/_next/image?url=%2Fimages%2Fhomepage%2Fbartender.gif&w=3840&q=75",
  organizer: userAgarcia,
  location: {
    label: "New York City",
    lat: 40.732185,
    lon: -74.0000205,
  },
};

const leventNYC3: Levent = {
  id: "4",
  name: "Wolf BTC Meetup",
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  description: `Join the Wolfnyc Bitcoin (BTC) Meetup, a gathering of cryptocurrency enthusiasts, traders, and blockchain professionals in the heart of [location/city]. Hosted by the passionate team at Wolfnyc, this event promises an engaging atmosphere for networking, knowledge sharing, and fostering connections within the vibrant Bitcoin community.`,
  visitorCount: 57,
  previewImage:
    "https://pbs.twimg.com/profile_images/1575560875582390277/g6ojagA8_400x400.jpg",
  organizer: userAgarcia,
  location: {
    label: "New York City",
    lat: 40.7528733,
    lon: -73.97905,
  },
};

const leventsNYC = [leventNYC1, leventNYC2, leventNYC3];

const levents = [leventBitcoinHongKong, leventPeruviana, ...leventsNYC];

const posts: Array<Post> = [
  {
    id: "0",
    text: "Come to Hong Kong this April  pfdkjdshsaljdlsajdlksajdlkjsadlkjsaldkjsaldkjsalkdjlksajdsadlkjsalkdjlskdajlksa.",
    author: userBailey,
    levent: leventBitcoinHongKong,
    timestamp: new Date(2024, 0, 4, 15).toISOString(),
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
};
