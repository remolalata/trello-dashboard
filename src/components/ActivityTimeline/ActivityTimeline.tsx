import React from "react";

import { useAppSelector } from "../../hooks/hooks";

import { Avatar, Skeleton } from "@mui/material";

import { parseTrelloDateToTimeAgo } from "../../helpers/utils";

const ActivityTimeline: React.FC = () => {

    const user = useAppSelector((state) => state.userData);
    const actions = useAppSelector((state) => state.boardData.actions);

    return (
        <div className="mt-6">
            {user && actions ?
                actions.length > 0 &&
                    actions.map((action: any, index: number) => (
                        <div className="flex items-start justify-between mb-6" key={index}>
                            <div className="flex items-center gap-x-4">
                                <div>
                                    <Avatar alt="Remo Antonio Lalata" src={`${user.data.avatarUrl}/60.png`} />
                                </div>
                                <div>
                                    <div className="font-bold text-sm mb-1 text-gray-700">{user.data.fullName}</div>
                                    <div className="font-thin text-xs italic text-gray-600">made an update on <span className="font-medium">{action.data.card.name}</span></div>
                                </div>
                            </div>
                            <div className="font-light text-gray-400 text-xs italic">{parseTrelloDateToTimeAgo(action.date)}</div>
                        </div>
                    ))
                : <Skeleton variant="rounded" height={200} className="w-full" />
            }

        </div>
    )
}

export default ActivityTimeline;