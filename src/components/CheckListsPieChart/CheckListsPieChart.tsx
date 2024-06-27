import React, { useEffect } from "react";

import { useAppSelector } from "../../hooks/hooks";

import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Skeleton from "@mui/material/Skeleton";
import { getAllChecklistItems } from "../../helpers/array";

interface CheckListsPieChartProps {
    variant?: "incomplete" | "complete" | string
}

const CheckListsPieChart: React.FC<CheckListsPieChartProps> = ({
    variant
}) => {

    const checkLists = useAppSelector((state) => state.boardData.checkLists);
    const lists = useAppSelector((state) => state.boardData.lists);
    const cards = useAppSelector((state) => state.boardData.cards);
    const items = getAllChecklistItems(checkLists, lists, cards, variant);

    return (
        <div className="mt-4 py-6">
            {checkLists && checkLists.length > 0 && lists && lists.length > 0 && cards && cards.length > 0 ?
                <PieChart
                    series={[
                        {
                            data: items,
                            innerRadius: 30,
                            outerRadius: 100,
                            paddingAngle: 1,
                            cornerRadius: 5,
                            cx: 100,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            arcLabel: (item) => item.value > 0 ? `${item.value}` : "",
                        }
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                          fill: 'white',
                          fontWeight: 'bold',
                          fontSize: 12
                        },
                    }}
                    width={400}
                    height={200}
                />
                : <Skeleton variant="rounded" width={400} height={200} />
            }
            
        </div>
    )
}

export default CheckListsPieChart;