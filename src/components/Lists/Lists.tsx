import React from "react";

import { useAppSelector } from "../../hooks/hooks";

import List from "./List/List";

import Skeleton from "@mui/material/Skeleton";

const Lists: React.FC = () => {

    const lists = useAppSelector((state) => state.boardData.lists);

    return (
        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-8 items-center">
            {lists && lists.length > 0 ? 
                lists.map((list: any) => <List key={list.id} list={list} />)
                : <Skeleton variant="rounded" height={136} className="w-full" />
                
            }
        </div>
    )
}

export default Lists