import React from "react";
import ArcBox from "./ArcBox";
import { Arc } from "@/lib/arc";
import { Episode } from "@/lib/episode";


interface ArcSectionProps {
    arcsData: Arc[];
    showArcNames: boolean;
    showPlots: boolean;
    collapsedList: boolean[];
    setCollapsedList: Function;
    episodesData: Episode[];
    showFillers: boolean;
    minRating: number;
    maxRating: number;
    aniwatch_url: string;
    aniwatch_start: number;
}

function ArcSection({ arcsData, showArcNames, showPlots, collapsedList, setCollapsedList, episodesData, showFillers, minRating, maxRating, aniwatch_url, aniwatch_start }: ArcSectionProps) {
    return (
        <div className={`flex flex-2 flex-col items-start justify-start ${showArcNames ? 'gap-6' : 'gap-0'}`}>

          {/* Arc Box */}

          {arcsData.map((arc, i) => {
            let start = arc.start;
            let end = arc.end;
            let title = arc.title;
            let plot = arc.summary;
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
              episodes.push(episodesData[i - 1]);
            }
            return (
              <ArcBox showArcNames={showArcNames} showPlots={showPlots} arcTitle={title} arcPlot={plot} episodes={episodes} collapsed={collapsedList[i]} index={i} collapsedList={collapsedList} setCollapsedList={setCollapsedList} aniwatch_url={aniwatch_url} aniwatch_start={aniwatch_start} />
            )

          })}

        </div>

        )}

export default React.memo(ArcSection);