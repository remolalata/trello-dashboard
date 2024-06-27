import React from "react";

import { useAppSelector } from "../../../hooks/hooks";

import { Paper, Skeleton } from "@mui/material";
import DeveloperBoardTwoToneIcon from '@mui/icons-material/DeveloperBoardTwoTone';
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import ColorLensTwoToneIcon from "@mui/icons-material/ColorLensTwoTone";
import IntegrationInstructionsTwoToneIcon from "@mui/icons-material/IntegrationInstructionsTwoTone";
import BugReportTwoToneIcon from "@mui/icons-material/BugReportTwoTone";
import RocketLaunchTwoToneIcon from "@mui/icons-material/RocketLaunchTwoTone";

import { countCards } from "../../../helpers/array";

const List: React.FC<any> = ({ list }) => {

    const cards = useAppSelector((state) => state.boardData.cards);

    return (
        <>
            {list &&
                <Paper square={false} className="flex items-center gap-x-3 px-6 py-10 w-1/5">
                    <div>
                        {list.name === "Concepts" ? (
                            <TipsAndUpdatesTwoToneIcon className="text-4xl" />
                        ) : list.name === "Design" ? (
                            <ColorLensTwoToneIcon className="text-4xl" />
                        ) : list.name === "Development" ? (
                            <IntegrationInstructionsTwoToneIcon className="text-4xl" />
                        ) : list.name === "Testing" ? (
                            <BugReportTwoToneIcon className="text-4xl" />
                        ) : list.name === "Launch" ? (
                            <RocketLaunchTwoToneIcon className="text-4xl" />
                        ) : <DeveloperBoardTwoToneIcon className="text-4xl" />}
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">{list.name}</h2>
                        {cards && cards.length ?
                            <div className="text-sm text-gray-500 mt-1">{countCards(list.id, cards)} story open</div>
                            : <Skeleton variant="rounded" height={20} className="w-full" />
                        }
                    </div>
                </Paper> 
            }
        </>
    )
}

export default List;