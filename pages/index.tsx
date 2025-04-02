import ArcBox from "@/components/ArcBox";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import narutoShippudenArcsJson from "@/data/naruto_shippuden_arcs.json"
import narutoShippudenEpisodesJson from "@/data/naruto_shippuden_ratings.json"
import { Arc } from "@/lib/arc";
import { Episode } from "@/lib/episode";
import Navbar from "@/components/Navbar";
import ShowDetailsComponent from "@/components/ShowDetailsComponent";
import ArcSection from "@/components/ArcSection";
import ShowDetailsComponentHome from "@/components/ShowDetailsComponentHome";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const [narutoDetails, setNarutoDetails] = useState({
    "title": "Naruto",
    "rating": "8.4",
    "year": "2002-2007",
    "vote_count": "144k",
    "imdb_url": "https://www.imdb.com/title/tt0409591/",
    "aniwatch_url": "https://9animetv.to/watch/naruto-677",
    "aniwatch_start": 12352,
    "title_url": "https://www.animefillerlist.com/shows/naruto",
    "pic": "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@.jpg",
    "url": "naruto"
  }
  )
  const [shippudenDetails, setShippudenDetails] = useState({
    "title": "Naruto: Shippuden",
    "rating": "8.7",
    "year": "2007-2017",
    "vote_count": "187k",
    "imdb_url": "https://www.imdb.com/title/tt0988824/",
    "aniwatch_url": "https://9animetv.to/watch/naruto-shippuden-355",
    "aniwatch_start": 7881,
    "title_url": "https://www.animefillerlist.com/shows/naruto-shippuden",
    "pic": "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@.jpg",
    "url": "shippuden"
  }
  )


  


  return (
    <div className="font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto px-4 py-4">

        {/* Show Details */}
        <ShowDetailsComponentHome ShowDetails={narutoDetails} />
        <ShowDetailsComponentHome ShowDetails={shippudenDetails} />

      </div>

    </div>
  );
}
