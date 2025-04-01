import { Inter } from "next/font/google";

const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
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

        {/* Main content */}
        <div className="flex flex-2 flex-col items-start justify-start gap-6">

          {/* Arc Box */}
          <div className="flex flex-col">

            {/* Arc Name and Shevron */}
            <div className="flex flex-row gap-2">
              {/* svg shevron */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              {/* Arc Name */}
              <div className="flex">Kazekage Rescue Mission</div>
            </div>

            {/* Arc Plot */}
            <div className="flex font-light text-xs text-white/40 pl-8 pb-2">Naruto returns to Konoha after two-and-a-half years of training, just in time to help rescue the Fifth Kazekage from Akatsuki.</div>

            {/* Episode Boxes */}
            <div className="flex flex-wrap pl-8 gap-1 text-sm">
              {Array.from(Array(4).keys()).map((i) => (
                <>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-green-800">9.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-green-500">9.2</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-yellow-500">8.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-red-800">7.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-purple-800">6.5</div>
                </>
              ))}
            </div>
          </div>

          {/* Arc Box */}
          <div className="flex flex-col">

            {/* Arc Name and Shevron */}
            <div className="flex flex-row gap-2">
              {/* svg shevron */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              {/* Arc Name */}
              <div className="flex">Tenchi Bridge Reconnaissance Mission</div>
            </div>

            {/* Arc Plot */}
            <div className="flex font-light text-xs text-white/40 pl-8 pb-2">Naruto and a new version of Team 7 use information gained from Akatsuki to try to find Sasuke.</div>

            {/* Episode Boxes */}
            <div className="flex flex-wrap pl-8 gap-1 text-sm">
              {Array.from(Array(4).keys()).map((i) => (
                <>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-yellow-500">8.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-green-800">9.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-red-800">7.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-green-500">9.2</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-purple-800">6.5</div>
                </>
              ))}
            </div>

          </div>


          {/* Arc Box */}
          <div className="flex flex-col">

            {/* Arc Name and Shevron */}
            <div className="flex flex-row gap-2">
              {/* svg shevron */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              {/* Arc Name */}
              <div className="flex">Tenchi Bridge Reconnaissance Mission</div>
            </div>

            {/* Arc Plot */}
            <div className="flex font-light text-xs text-white/40 pl-8 pb-2">Naruto and a new version of Team 7 use information gained from Akatsuki to try to find Sasuke.</div>

            {/* Episode Boxes */}
            <div className="flex flex-wrap pl-8 gap-1 text-sm">
              {Array.from(Array(4).keys()).map((i) => (
                <>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-purple-800">6.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-green-800">9.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-green-500">9.2</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-yellow-500">8.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-red-800">7.5</div>
                </>
              ))}
            </div>

          </div>

          {/* Arc Box */}
          <div className="flex flex-col">

            {/* Arc Name and Shevron */}
            <div className="flex flex-row gap-2">
              {/* svg shevron */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
              {/* Arc Name */}
              <div className="flex">Tenchi Bridge Reconnaissance Mission</div>
            </div>

            {/* Arc Plot */}
            <div className="flex font-light text-xs text-white/40 pl-8 pb-2">Naruto and a new version of Team 7 use information gained from Akatsuki to try to find Sasuke.</div>

            {/* Episode Boxes */}
            <div className="flex flex-wrap pl-8 gap-1 text-sm">
              {Array.from(Array(4).keys()).map((i) => (
                <>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-red-800">7.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-green-800">9.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-yellow-500">8.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-purple-800">6.5</div>
                  <div className="flex justify-center items-center w-12 h-12 rounded-sm bg-green-500">9.2</div>
                </>
              ))}
            </div>

          </div>



        </div>

        {/* Settings pane */}
        <div className="flex flex-1 flex-col items-start justify-center text-sm">
          <div className="flex flex-col items-start gap-2 justify-center px-10">
            <div className="cursor-pointer flex text-left bg-[#2A60D4] rounded-sm px-4 py-1">Arc Names</div>
            <div className="cursor-pointer flex text-left bg-[#2A60D4] rounded-sm px-4 py-1">Plots</div>
            <div className="cursor-pointer flex text-left bg-[#2A60D4] rounded-sm px-4 py-1">Fillers</div>
            <div className="cursor-pointer flex text-left bg-white/10 rounded-sm px-4 py-1">Collapse All</div>
            <div className="cursor-pointer flex text-left bg-white/10 rounded-sm px-4 py-1">Expand All</div>
            <div className="cursor-pointer flex text-left gap-2 justify-start items-center ">
              <div className="flex">Min Rating : </div>
              <input type="number" value={0.0} className="bg-white/10 w-10 rounded-sm px-1 py-1" />
            </div>
            <div className="cursor-pointer flex text-left gap-2 justify-start items-center">
              <div className="flex">Max Rating : </div>
              <input type="number" value={10.0} className="bg-white/10 w-10 rounded-sm px-1 py-1" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
