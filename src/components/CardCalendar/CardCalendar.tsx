import React, { useEffect, useState } from "react";

import { useAppSelector } from "../../hooks/hooks";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import Modal from "../Modal/Modal";

import { getAllTask } from "../../helpers/array";
import { parseTrelloDateToCalendarDate } from "../../helpers/utils";

const CardCalendar: React.FC = () => {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("Test");
    const checkLists = useAppSelector((state) => state.boardData.checkLists);

    const handleEventClick = (data: any) => {
        setModalTitle(data.event.title);
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    };

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
                eventClick={(mouseEnterInfo) => handleEventClick(mouseEnterInfo)}
                handleWindowResize={true}
            />

            <Modal open={showModal} handleClose={handleClose} title={modalTitle} />
        </div>
    )
}

export default CardCalendar;