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

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function ShippudenPage() {
  const [showArcNames, setShowArcNames] = useState(true);
  const [showPlots, setShowPlots] = useState(true);
  const [showFillers, setShowFillers] = useState(true);
  const [minRating, setMinRating] = useState(0.0);
  const [maxRating, setMaxRating] = useState(10.0);
  const [arcsData, setArcsData] = useState<Arc[]>([]);
  const [episodesData, setEpisodesData] = useState<Episode[]>([]);
  const [collapsedList, setCollapsedList] = useState<boolean[]>([])
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isOnTop, setIsOnTop] = useState(false);

  const [ShowDetails, setShowDetails] = useState({
    "title": "Naruto: Shippuden",
    "rating": "8.7",
    "year": "2007-2017",
    "vote_count": "187k",
    "imdb_url": "https://www.imdb.com/title/tt0988824/",
    "aniwatch_url": "https://9animetv.to/watch/naruto-shippuden-355",
    "aniwatch_start": 7881,
    "title_url": "https://www.animefillerlist.com/shows/naruto-shippuden",
    "pic": "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@.jpg",
  }
  )

  useEffect(() => {
    // Get the current scroll position
    setLastScrollPosition(window.pageYOffset)

    // Add event listener
    window.addEventListener('scroll', () => {
      if (window.pageYOffset == 0) {
        setIsOnTop(true);
      }
      else {
        setIsOnTop(false);
      }
    });

    return () => {
      // Remove event listener on cleanup
      window.removeEventListener('scroll', () => { });
    };
  }, []);

  useEffect(() => {
    // Read 'data/naruto_shippuden_arcs.json' and set the state
    setArcsData(narutoShippudenArcsJson);
    setEpisodesData(narutoShippudenEpisodesJson);
    const allFalsearray = Array(narutoShippudenArcsJson.length).fill(false);
    setCollapsedList(allFalsearray);
  }, [])

  function handleGoUp() {
    if (isOnTop) {
      // scroll to previous position
      window.scrollTo({ top: lastScrollPosition, behavior: 'smooth' });
    }
    else {
      // scroll to top
      setLastScrollPosition(window.pageYOffset);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  }

  return (
    <div className="font-inter">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="flex w-screen flex-row items-start justify-center max-w-6xl mx-auto px-4 py-4">

        {/* Show Details */}
        <ShowDetailsComponent ShowDetails={ShowDetails} />

        {/* Arcs content */}

        <ArcSection arcsData={arcsData} showArcNames={showArcNames} showPlots={showPlots} collapsedList={collapsedList} setCollapsedList={setCollapsedList} episodesData={episodesData} showFillers={showFillers} minRating={minRating} maxRating={maxRating} aniwatch_url={ShowDetails.aniwatch_url} aniwatch_start={ShowDetails.aniwatch_start} />


        {/* Settings pane */}
        <div className="flex flex-1 flex-col items-start justify-center text-sm">
          <div className="flex flex-col items-start gap-2 justify-center px-10">
            <div className={`cursor-pointer flex text-left transition-colors duration-250 ${showArcNames ? 'bg-[#2A60D4]' : 'bg-white/10'} ${showArcNames ? 'hover:bg-[#3c80e6]' : 'hover:bg-white/20'} rounded-sm px-4 py-1`} onClick={() => setShowArcNames(prev => !prev)}>Arc Names</div>
            <div className={`cursor-pointer flex text-left transition-colors duration-250 ${showPlots ? 'bg-[#2A60D4]' : 'bg-white/10'} ${showPlots ? 'hover:bg-[#3c80e6]' : 'hover:bg-white/20'} rounded-sm px-4 py-1`} onClick={() => setShowPlots(prev => !prev)}>Plots</div>
            <div className={`cursor-pointer flex text-left transition-colors duration-250 ${showFillers ? 'bg-[#2A60D4]' : 'bg-white/10'} ${showFillers ? 'hover:bg-[#3c80e6]' : 'hover:bg-white/20'} rounded-sm px-4 py-1`} onClick={() => setShowFillers(prev => !prev)}>Fillers</div>
            <div className={`cursor-pointer flex text-left transition-colors duration-250 bg-white/10 hover:bg-white/20 rounded-sm px-4 py-1`} onClick={() => setCollapsedList(prev => prev.map(x => true))}>Collapse All</div>
            <div className={`cursor-pointer flex text-left transition-colors duration-250 bg-white/10 hover:bg-white/20 rounded-sm px-4 py-1`} onClick={() => setCollapsedList(prev => prev.map(x => false))}>Expand All</div>
            <div className={`flex text-left gap-2 justify-start items-center `}>
              <div className="flex">Min Rating : </div>
              <input type="number" value={minRating} min={0.0} max={10.0} className="bg-white/10 w-10 rounded-sm px-1 py-1" onChange={(e) => setMinRating(parseFloat(e.target.value))} />
            </div>
            <div className="flex text-left gap-2 justify-start items-center">
              <div className="flex">Max Rating : </div>
              <input type="number" value={maxRating} min={0.0} max={10.0} className="bg-white/10 w-10 rounded-sm px-1 py-1" onChange={(e) => setMaxRating(parseFloat(e.target.value))} />
            </div>
          </div>

          {/* Go Up Button */}
          <div className="flex bg-transparent border border-white/40 rounded-full w-12 h-12 justify-center items-center fixed bottom-12 right-12 cursor-pointer" onClick={() => handleGoUp()}>
            {/* down/up shevron */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${!isOnTop ? '-rotate-180' : ''}`}>
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
