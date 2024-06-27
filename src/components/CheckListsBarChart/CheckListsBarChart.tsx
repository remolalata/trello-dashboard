import React from "react";

import { useAppSelector } from "../../hooks/hooks";

import Skeleton from "@mui/material/Skeleton";
import { BarChart } from "@mui/x-charts/BarChart";
import { getBarChartData } from "../../helpers/array";

interface CheckListsBarChartProps {
    variant?: "all" | "incomplete" | "complete" | string
}

const CheckListsBarChart: React.FC<CheckListsBarChartProps> = () => {

    const lists = useAppSelector((state) => state.boardData.lists);
    const cards = useAppSelector((state) => state.boardData.cards);
    const checkLists = useAppSelector((state) => state.boardData.checkLists);

    return (
        <>
            {checkLists && checkLists.length > 0 && lists && lists.length > 0 && cards && cards.length > 0 ?
                <BarChart
                    series={getBarChartData(lists, cards, checkLists)}
                    height={220}
                    xAxis={[{ data: ["Concepts", "Design", "Development", "Testing", "Launch"], scaleType: "band" }]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                />
                :
                <Skeleton variant="rounded" height={220} className="w-full" />
            }
        </>
    )
}

export default CheckListsBarChart;