import ArcBox from "@/components/ArcBox";
import { Inter } from "next/font/google";
import { useState } from "react";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const [showArcNames, setShowArcNames] = useState(true);
  const [showPlots, setShowPlots] = useState(true);
  const [showFillers, setShowFillers] = useState(true);
  const [minRating, setMinRating] = useState(0.0);
  const [maxRating, setMaxRating] = useState(10.0);
  const [arcsData, setArcsData] = useState([
    {
      title: "Kazekage Rescue Mission",
      plot: "Naruto returns to Konoha after two-and-a-half years of training, just in time to help rescue the Fifth Kazekage from Akatsuki.",
      start: 1,
      end: 5,

    },
    {
      title: "Tenchi Bridge Reconnaissance Mission",
      plot: "Naruto and a new version of Team 7 use information gained from Akatsuki to try to find Sasuke.",
      start: 6,
      end: 10,
    },
    {
      title: "Tenchi Bridge Reconnaissance Mission 2",
      plot: "Naruto and a new version of Team 8 use information gained from Akatsuki to try to find Sasuke.",
      start: 11,
      end: 15,
    },
  ]);

  const [episodesData, setEpisodesData] = useState([
    {
      "title": "Homecoming",
      "rating": "6.2",
      "vote_count": "1.7K",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt0990165\/?ref_=ttep_ep_1",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZjQzNmU5MWMtMTg5MC00OWRlLTgzMGUtMzIxNGNjMzliMzkxXkEyXkFqcGc@._V1_QL75_UX500_CR0,47,500,281_.jpg",
      "plot": "Naruto returns to Konoha after a two-and-a-half-year training journey with Jiraiya and is reunited with Sakura.",
      "episode": 1,
      "filler": true
    },
    {
      "title": "The Akatsuki Makes Its Move",
      "rating": "9.8",
      "vote_count": "1.2K",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt0990163\/?ref_=ttep_ep_2",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BOWZkMzgxMTktY2E1NC00MTM0LThkMzUtZDRhMDhiZDZiMzAzXkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "Kakashi gives Naruto and Sakura a test to see how far they had improved. Meanwhile, two Akatsuki members, Deidara and Sasori, arrive at the entrance of the Sunagakure to capture the One-Tailed Shukaku's host, Gaara.",
      "episode": 2,
      "filler": false
    },
    {
      "title": "The Results of Training",
      "rating": "5.9",
      "vote_count": "1.1K",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt0990167\/?ref_=ttep_ep_3",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNTNkMjNkZGMtNDY1OS00ZTBkLTkxYTItZjk5M2Q1NTU1ZDk4XkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "Sakura and Naruto both demonstrate their newly acquired skills. Meanwhile, Deidara commences his attack on Sunagakure and is confronted by Gaara.",
      "episode": 3,
      "filler": true
    },
    {
      "title": "The Jinchuriki of the Sand",
      "rating": "4.2",
      "vote_count": "1.1K",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt0990168\/?ref_=ttep_ep_4",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZTM1OTNmMmItOTZhZS00ZDY5LWFlZDQtODBkNjhiZjQxOTIyXkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "Gaara is quick to detect Deidara's presence, and an aerial battle ensues with Deidara on his giant bird and Gaara atop sand.",
      "episode": 4,
      "filler": true
    },
    {
      "title": "The Kazekage Stands Tall",
      "rating": "9.7",
      "vote_count": "1K",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt0990164\/?ref_=ttep_ep_5",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNDRiNjI0ZDItYzI2Yy00NDhhLWI5NTYtYmUwYmFkMjM3ODlmXkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "Naruto and Sakura defeat Kakashi in the survival challenge. Tsunade assigns them to a three-man squad led by Kakashi, who tells them they are now his equals.",
      "episode": 5,
      "filler": false
    },
    {
      "title": "Mission Cleared",
      "rating": "9.1",
      "vote_count": "1K",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt0990166\/?ref_=ttep_ep_6",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZTg1YWMwY2MtNTNmMC00NWJmLWJmNzktMTNiZTMyYTFhM2IxXkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "In order to protect his village from Deidara's explosive clay, Gaara uses his chakra to create a giant sand shield.",
      "episode": 6,
      "filler": false
    },
    {
      "title": "Run, Kankuro",
      "rating": "8.6",
      "vote_count": "966",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt0996817\/?ref_=ttep_ep_7",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BOGRiODFkOTMtYmE1Mi00M2ZiLTkxYjYtZTA5NzgxNTFmMWQ4XkEyXkFqcGc@._V1_QL75_UX500_CR0,52,500,281_.jpg",
      "plot": "Gaara, his strength completely exhausted, is whisked away by Deidara. Kankuro ignores Baki's efforts to stop him and immediately sets out in pursuit with a platoon to rescue Gaara.",
      "episode": 7,
      "filler": false
    },
    {
      "title": "Team Kakashi, Deployed",
      "rating": "7.6",
      "vote_count": "932",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt1191046\/?ref_=ttep_ep_8",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYTVjOTRiNGItNGZkMC00NzRkLWE4NzAtNjM2NmE4M2NmZmFmXkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "On her way to the Sand Village, Temari encounters Kakashi and his team. Kakashi admonishes Naruto when he tries to rush ahead...",
      "episode": 8,
      "filler": true
    },
    {
      "title": "The Jinchuriki's Tears",
      "rating": "7.5",
      "vote_count": "921",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt1202309\/?ref_=ttep_ep_9",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BOTE1NjMxMGUtNzk5ZS00YzA5LTkyZTAtOTc1ZDZjYTc0ZmE2XkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "An urgent message from the Sand Village detailing the Akatsuki's kidnapping of the Kazekage reaches the Hidden Leaf Village. Tsunade wastes no time in ordering Team Kakashi to the Sand Village.",
      "episode": 9,
      "filler": true
    },
    {
      "title": "Sealing Jutsu: Nine Phantom Dragons",
      "rating": "8.4",
      "vote_count": "900",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt1202302\/?ref_=ttep_ep_10",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BNTEwZGIyMTMtNmZmNi00MGRmLWFmZGMtYTU5Njg2MTBiZjMyXkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "The Sand ninja fight against time to treat Kankuro. Even the Sand's poison expert, Granny Chiyo, is baffled. The only hope lies with the reinforcements sent by Tsunade.",
      "episode": 10,
      "filler": false
    },
    {
      "title": "The Medical Ninja's Student",
      "rating": "7.6",
      "vote_count": "897",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt1202307\/?ref_=ttep_ep_11",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYTVhOTA0N2YtZWZlYi00ZDg3LWIyNzAtOWQ3MmMyZTNjNTUzXkEyXkFqcGc@._V1_QL75_UX500_CR0,52,500,281_.jpg",
      "plot": "Sakura treats a critically ill Kankuro. After extensive training she's now a full-fledged Medic Ninja, and Sakura amazes everyone with her sure, steady hands.",
      "episode": 11,
      "filler": true
    },
    {
      "title": "The Retired Granny's Determination",
      "rating": "7.8",
      "vote_count": "885",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt1202305\/?ref_=ttep_ep_12",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMWYxNWI0ZDctZGRlYS00NDBhLTlkNzctYjBlY2ZmZWQxNDhmXkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "Pakkun finds the hideout of the Akatsuki. Team Kakashi and Temari prepare to set out to get Gaara back, but Temari is ordered to stay behind and help guard the village.",
      "episode": 12,
      "filler": true
    },
    {
      "title": "A Meeting With Destiny",
      "rating": "8.0",
      "vote_count": "915",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt1202306\/?ref_=ttep_ep_13",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BMzY2YTE0ZDEtMjY4MC00NDNiLTlhMDYtYWU2Nzg3ZmEyYjNjXkEyXkFqcGc@._V1_QL75_UX500_CR0,52,500,281_.jpg",
      "plot": "Team Kakashi encounter Itachi Uchiha, who had dealt them a bitter defeat in the past. Kakashi warns everyone not to look into Itachi's Sharingan Eyes.",
      "episode": 13,
      "filler": false
    },
    {
      "title": "Naruto's Growth",
      "rating": "8.3",
      "vote_count": "939",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt1202311\/?ref_=ttep_ep_14",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BZTQ2Y2MwYzAtZjI1My00NzgxLWE4NTMtZmQ1MDMwMjU2YWZmXkEyXkFqcGc@._V1_QL75_UX500_CR0,53,500,281_.jpg",
      "plot": "Guy prepares to use a forbidden secret jutsu. Meanwhile, Naruto falls under Itachi's genjutsu, and all the anti-genjutsu training he underwent with Jiraiya races through Naruto's mind.",
      "episode": 14,
      "filler": false
    },
    {
      "title": "The Secret Weapon is Called....",
      "rating": "9.7",
      "vote_count": "940",
      "imdb_url": "https:\/\/www.imdb.com\/title\/tt1202310\/?ref_=ttep_ep_15",
      "pic": "https:\/\/m.media-amazon.com\/images\/M\/MV5BYWViYjM3YjYtZDJmOS00NDQ1LTg5Y2MtOTI0YmQ4YzUwYjBlXkEyXkFqcGc@._V1_QL75_UX500_CR0,54,500,281_.jpg",
      "plot": "Granny Chiyo and Sakura rescue Naruto from Itachi's genjutsu. Without a moment's delay, Kakashi begins a counterattack.",
      "episode": 15,
      "filler": false
    },
  ]);

  const [collapsedList, setCollapsedList] = useState([false, false, false])

  return (
    <div className="font-inter">
      {/* Navbar */}
      <div className="flex flex-row items-center justify-center py-2">
        {/* Empty space */}
        <div className="flex-1  w-full"></div>
        <h1 className="text-2xl font-bold text-center text-white flex-1">
          GHD<span className="font-light text-2xl"> Ratings</span>
        </h1>
        {/* Github logo */}
        <div className="flex justify-end items-center flex-1 w-full">
          <a href="https://github.com/gholamrezadar/GHDratings" className="pr-24 px-4 py-2 text-white">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-10 fill-white"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
          </a>
        </div>
      </div>


      {/* Main */}
      <div className="flex w-screen flex-row items-start justify-center max-w-6xl mx-auto px-4 py-4">

        {/* Show Details */}
        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center">
            {/* Cover Image */}
            <div className=" w-full flex justify-center items-center">
              <div className="w-full h-full max-w-52  rounded-2xl">
                <img src="https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@.jpg" alt="cover" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </div>

            {/* Title */}
            <div className="flex-1 w-full">
              <h1 className="text-xl text-center text-white py-2">
                Naruto: Shippuden
              </h1>
            </div>

            {/* Rating-Year */}
            <div className="flex-row flex justify-center items-center gap-6 pb-2">
              {/* Rating */}
              <div className="flex-col flex justify-start items-start">
                <div className="flex flex-row items-center justify-center gap-1">
                  {/* Star svg */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-yellow-500">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                  </svg>

                  <div>
                    <h1 className="text-lg text-center text-white">
                      8.7 <span className="font-light text-sm text-white/40">/ 10</span>
                    </h1>
                    <div className="text-white/40 text-xs -mt-1">187k</div>
                  </div>
                </div>
              </div>
              <div className="flex text-sm font-light text-white/80">2007-2017</div>
            </div>

            {/* Links */}
            <div className="flex flex-row items-center justify-center w-full gap-4 pt-2 text-sm">
              <a href="https://www.imdb.com/title/tt0119698/" target="_blank" className="text-black rounded-md bg-amber-300 px-4 py-1">IMDB</a>
              <a href="https://www.themoviedb.org/movie/30629-naruto-shippuden" target="_blank" className="text-black rounded-md bg-[#5B3CA3] px-3 py-1">9 Anime</a>
            </div>

          </div>
        </div>

        {/* Arcs content */}
        <div className={`flex flex-2 flex-col items-start justify-start ${showArcNames ? 'gap-6' : 'gap-1'}`}>

          {/* Arc Box */}

          {arcsData.map((arc, i) => {
            let start = arc.start;
            let end = arc.end;
            let title = arc.title;
            let plot = arc.plot;
            let episodes = [];
            for (let i = start; i <= end; i++) {

              // ignore fillers if showFillers is false
              if (!showFillers && episodesData[i - 1].filler)
                continue;

              // ignore episodes outside of the range
              const rating = parseFloat(episodesData[i - 1].rating);
              if (minRating > rating || maxRating < rating)
                continue;

              // add episode rating to episodes array
              episodes.push(rating);
            }
            return (
              <ArcBox showArcNames={showArcNames} showPlots={showPlots} arcTitle={title} arcPlot={plot} episodes={episodes} collapsed={collapsedList[i]} index={i} collapsedList={collapsedList} setCollapsedList={setCollapsedList} />
            )

          })}

        </div>

        {/* Settings pane */}
        <div className="flex flex-1 flex-col items-start justify-center text-sm">
          <div className="flex flex-col items-start gap-2 justify-center px-10">
            <div className="cursor-pointer flex text-left bg-[#2A60D4] rounded-sm px-4 py-1" onClick={() => setShowArcNames(prev => !prev)}>Arc Names</div>
            <div className="cursor-pointer flex text-left bg-[#2A60D4] rounded-sm px-4 py-1" onClick={() => setShowPlots(prev => !prev)}>Plots</div>
            <div className="cursor-pointer flex text-left bg-[#2A60D4] rounded-sm px-4 py-1" onClick={() => setShowFillers(prev => !prev)}>Fillers</div>
            <div className="cursor-pointer flex text-left bg-white/10 rounded-sm px-4 py-1" onClick={() => setCollapsedList(prev => prev.map(x => true))}>Collapse All</div>
            <div className="cursor-pointer flex text-left bg-white/10 rounded-sm px-4 py-1" onClick={() => setCollapsedList(prev => prev.map(x => false))}>Expand All</div>
            <div className="cursor-pointer flex text-left gap-2 justify-start items-center ">
              <div className="flex">Min Rating : </div>
              <input type="number" value={minRating} min={0.0} max={10.0} className="bg-white/10 w-10 rounded-sm px-1 py-1" onChange={(e) => setMinRating(parseFloat(e.target.value))} />
            </div>
            <div className="cursor-pointer flex text-left gap-2 justify-start items-center">
              <div className="flex">Max Rating : </div>
              <input type="number" value={maxRating} min={0.0} max={10.0} className="bg-white/10 w-10 rounded-sm px-1 py-1" onChange={(e) => setMaxRating(parseFloat(e.target.value))} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
