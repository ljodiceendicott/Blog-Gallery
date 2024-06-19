import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

import mockdata from "datascraping/test.json";

const mockURLs = mockdata;

const placeholderimg = "https://utfs.io/f/6784c48e-a263-4959-b162-126259a66773-a0ams3.png";


export default async function HomePage() {
  const posts = await db.query.posts.findMany();
 
  //Live data in DB
  const Stories = posts.map((url, index) => ({
    id: index + 1,
    url: url.storyURL,
    title: url.title,
    subtitle: url.subtitle,
    img: placeholderimg,
  }));

  //testing to make sure the ui is working
const mockStories = mockURLs.map((url, index) => ({
  id: index + 1,
  url: url.url,
  title: url.title,
  subtitle: url.subtitle,
  img: placeholderimg,
}));



  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-3">
        {mockStories.map((story) => (
          <div key={story.id} className="w-60">
            <Link href={encodeURI(story.url)}>
              <img src={story.img}/> 
            </Link>
            <div className=" font-bold text-lg">{story.title}</div>
            <div>{story.subtitle}</div>
          </div>
        ))}  </div>
      Hello Testing page
    </main>
  );
}
