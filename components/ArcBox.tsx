import { Episode } from "@/lib/episode";
import { useState } from "react";
import Tooltip from "./Tooltip";

interface ArcBoxProps {
    arcTitle: string;
    arcPlot: string;
    episodes: Episode[];
    showArcNames: boolean;
    showPlots: boolean;
    collapsed: boolean;
    index: number;
    collapsedList: boolean[];
    setCollapsedList: Function;
}

export default function ArcBox({ arcTitle, arcPlot, episodes, showArcNames, showPlots, collapsed, index, collapsedList, setCollapsedList }: ArcBoxProps) {
    const getColor = (rating: number) => {
        if (rating >= 9.5)
            return "bg-[#0A5E20]";
        else if (rating >= 9.0)
            return "bg-[#2FBA4F]";
        else if (rating >= 8)
            return "bg-[#66CA7C]";
        else if (rating >= 7)
            return "bg-[#E2BA4C]";
        else if (rating >= 6)
            return "bg-[#E04A59]";
        else if (rating >= 5)
            return "bg-[#BD2130]";
        else
            return "bg-[#7B2651]";
    }

    const toggleThisCollapsed = (index: number, collapsedList: boolean[]) => {
        let newCollapsedList = [...collapsedList];
        newCollapsedList[index] = !newCollapsedList[index];
        setCollapsedList(newCollapsedList);
    }

    function handleEpisodeClick(episode: Episode) {
        console.log(episode);
    }

    return (
        <>
            <div className="flex flex-col" >

                {/* Arc Name and Shevron */}
                {showArcNames && (<div className="flex flex-row gap-2 cursor-pointer" onClick={() => toggleThisCollapsed(index, collapsedList)}>
                    {/* svg shevron */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-6 ${collapsed ? '-rotate-90' : ''}`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                    {/* Arc Name */}
                    <div className="flex pb-1">{arcTitle}</div>

                </div>
                )}

                {/* Arc Plot */}
                {showArcNames && showPlots && !collapsed && (
                    <div className="flex font-light text-xs text-white/40 pl-8 pb-2">{arcPlot}</div>
                )}

                {/* Episode Boxes */}
                {!collapsed && (
                    <div className="flex flex-wrap pl-8 gap-1 text-sm">
                        {episodes.map((episode, i) => (
                            <>
                                <Tooltip text={"Ep " + episode.episode + ". " + episode.title + " "}>
                                    <a href={`https://9animetv.to/watch/naruto-shippuden-355?ep=${7881 + episode.episode}`} target="_blank" rel="noopener noreferrer">
                                        <div key={i} onClick={() => handleEpisodeClick(episode)} className={`flex cursor-pointer justify-center items-center w-12 h-12 rounded-sm ${getColor(parseFloat(episode.rating))}`}>{episode.rating}</div>
                                    </a>
                                </Tooltip>

                            </>
                        ))}
                        {episodes.length == 0 && showArcNames && (
                            <div className="flex flex-col items-center justify-center">
                                <div className="text-center text-red-300/40 text-sm">No episodes with the current filters.</div>
                            </div>
                        )}
                    </div>
                )}
            </div>

        </>
    );
}