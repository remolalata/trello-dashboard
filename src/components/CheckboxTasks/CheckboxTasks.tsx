import React from "react";

import { useAppSelector } from "../../hooks/hooks";

import CheckboxTask from "./ChecbkoxTask/CheckboxTask";

import { getAllTask } from "../../helpers/array";

import Skeleton from "@mui/material/Skeleton";

import { updateData } from "../../helpers/api";

const CheckboxTasks: React.FC = () => {

    const checklist = useAppSelector((state) => state.boardData.checkLists);
    const tasks = getAllTask(checklist, "all");

    const handleOnChange = (idCard: any, taskId: any, state: "incomplete" | "complete") => {
        updateData(idCard, taskId, state);
    }

    return (
        <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
                <div className="font-bold text-base">Task name</div>
                <div  className="font-bold text-base">Due date</div>
            </div>
            {checklist && checklist.length && tasks && tasks.length > 0 ? (
                tasks.map((task: any, index: number) => (
                    <CheckboxTask task={task} key={index} onChange={handleOnChange} />
                ))
            ) : (
                <Skeleton variant="rounded" height={200} className="w-full" />
            )}
        </div>
    )
}

export default CheckboxTasks;