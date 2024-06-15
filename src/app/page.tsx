import Link from "next/link";
import { db } from "~/server/db";


const mockURLs = [
  "https://medium.com/@jodiceluke/reflection-of-a-year-without-school-cc47b248a83e",
  "https://medium.com/@jodiceluke/creativity-to-exe-cution-788fd75e551b",
  "https://medium.com/@jodiceluke/the-super-power-of-online-online-interactions-prepare-for-remote-work-fa4bb55ce8a0"
];

const placeholderimg = "https://utfs.io/f/6784c48e-a263-4959-b162-126259a66773-a0ams3.png";

const  mockStories = mockURLs.map((url,index) =>({
  id: index+1,
  url,
  img: placeholderimg,
}))

export default async function HomePage() {
  
  const posts = await db.query.posts.findMany();
  
  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-3">
        {mockStories.map((story) => (
          <div key={story.id} className="w-60">
            <Link href={story.url}>
              <img src={story.img}/> 
            </Link>
            {story.id}
          </div>
        ))}  </div>
      Hello Testing page
    </main>
  );
}
