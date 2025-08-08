import React from "react";

function ShowDetailsComponent({ ShowDetails } : any) {
    return (
        <div className="flex flex-1 flex-col items-center justify-center">
            <div className="flex flex-col w-full items-center justify-center">
                {/* Cover Image */}
                <div className=" w-full flex justify-center items-center">
                    <div className="w-full h-full max-w-52  rounded-2xl">
                        <img src={ShowDetails.pic} alt="cover" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>

                {/* Title */}
                <div className="flex-1 w-full">
                    <h1 className="text-xl text-center text-white py-2">
                        <a href={ShowDetails.title_url} target="_blank" rel="noopener noreferrer">
                            {ShowDetails.title}
                        </a>
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
                                    {ShowDetails.rating} <span className="font-light text-sm text-white/40">/ 10</span>
                                </h1>
                                <div className="text-white/40 text-xs -mt-1">{ShowDetails.vote_count}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex text-sm font-light text-white/80">{ShowDetails.year}</div>
                </div>

                {/* Links */}
                <div className="flex flex-row items-center justify-center w-full gap-4 pt-2 text-sm">
                    <a href={ShowDetails.imdb_url} target="_blank" className="text-black rounded-md transition-colors duration-250 bg-amber-300 hover:bg-[#ffdb59] px-4 py-1">IMDB</a>
                    <a href={ShowDetails.aniwatch_url} target="_blank" className="text-white rounded-md transition-colors duration-250 bg-[#5A2E98] hover:bg-[#704ba5] px-3 py-1">9 Anime</a>
                </div>

            </div>
        </div>

    )
}

export default React.memo(ShowDetailsComponent);