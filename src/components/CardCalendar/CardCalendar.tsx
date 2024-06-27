import React, { useEffect, useState } from "react";

import { useAppSelector } from "../../hooks/hooks";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { getAllTask } from "../../helpers/array";
import { parseTrelloDateToCalendarDate } from "../../helpers/utils";

const CardCalendar: React.FC = () => {
    const [events, setEvents] = useState([]);
    const checkLists = useAppSelector((state) => state.boardData.checkLists);

    useEffect(() => {
        const tasks = getAllTask(checkLists);
        if (tasks.length) {
            const mapTasks = tasks.map((task: any) => {
                return {
                    date: parseTrelloDateToCalendarDate(task.due),
                    title: task.name
                }
            });

            setEvents(mapTasks);
        }
    }, [checkLists])

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>
    )
}

export default CardCalendar;