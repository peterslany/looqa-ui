import { PostComponent } from "../../components/Post/Post";
import { Levent } from "../../types/levent";
import { Post } from "../../types/post";
import { User } from "../../types/user";
import "./Feed.css";

const userBailey: User = {
  name: "David Bailey",
  npubkey: "npub1baileyl00qaasakjhdsfa09ufon",
  handle: "bailey"
};

const userAgarcia: User = {
  name: "Andre Garcia",
  npubkey: "npub1agarcia23a7ga3rciau3si9ngl6oo68qa9app4",
  handle: "agarcia"
}

const leventBitcoinHongKong: Levent = {
  id: "0",
  name: "Bitcoin Hong Kong 2024",
  startDate: new Date(2024, 3, 22).toISOString(),
  endDate: new Date(2024, 3, 24).toISOString(),
  description: `BITMAIN - the world's leading manufacturer of digital currency mining servers through its brand ANTMINER, will host the 2023 World Digital Mining Summit (WDMS 2023) in Hong Kong from September 22nd to 23rd, 2023. This summit's theme is "Mining for the Bull Market," aiming to help clients strategize their mining operations in advance to reap the benefits of the future bull market.

  The summit will introduce the ANTMINER S21 miner for the first time, boasting unparalleled hash rate and performance, leading the global mining industry into the 1xJ/T era. Since its inception, BITMAIN has always been at the forefront of the industry, leading each technological breakthrough and innovation. From the first breakthrough of 100J/T with the S9 to the 34.5J/T of the S19, the 29.5J/T of the S19 Pro, the 21.5J/T of the S19XP, and the 20.8J/T of the S19XP Hyd., ANTMINER remains true to its original mission, always leading the pack.
  
  Furthermore, as a token of appreciation to its customers and to promote long-term companionship and win-win partnership, the summit will offer numerous benefits to attendees. BITMAIN will launch a customer loyalty points system. Customers can use these points to apply for a free credit limit on the S21, allowing them to start mining before making payments. They can also use the points to redeem exclusive discount coupons for the ANTMINER S21 and enjoy optimal discounts. Stay tuned for more surprises!`,
  visitorCount: 271,
  previewImage: "none",
  organizer: userBailey,
  location: {
    label: "Hong Kong",
    lat: 22.2789953,
    lng: 114.17097166666667,
  },
};

const posts: Array<Post> = [
  {
    id: "0",
    text: "Come to Hong Kong this April  pfdkjdshsaljdlsajdlksajdlkjsadlkjsaldkjsaldkjsalkdjlksajdsadlkjsalkdjlskdajlksa.",
    author: userBailey,
    levent: leventBitcoinHongKong,
    timestamp: new Date(2024, 0, 4, 15).toISOString()
  },

  {
    id: "1",
    text: "We are opening a new exhibition at Peruvian Cafe this Saturday! Come at 18.00 for the vernissage!",
    author: userAgarcia,
    levent: leventBitcoinHongKong,
    media: "https://i.pinimg.com/originals/05/6b/0a/056b0ab04716fc8c1278f25cdc813381.jpg",
    timestamp: new Date(2024, 0, 1, 15, 46).toISOString()
  },
];

const Feed = () => {
  return (
    <div>
      <div className="feed__featured-container">...</div>
      <main className="feed__main">
        <div className="feed__main__posts">
          {posts.map((post) => (
            <PostComponent key={post.id} post={post} />
          ))}
        </div>
        <div className="feed__main__sidebar">{/* ADD SIDEBAR */}</div>
      </main>
    </div>
  );
};
export { Feed };
