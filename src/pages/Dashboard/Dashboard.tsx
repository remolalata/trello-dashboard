import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Lists from "../../components/Lists/Lists";
import CheckListsPieChart from "../../components/CheckListsPieChart/CheckListsPieChart";
import CheckListsBarChart from "../../components/CheckListsBarChart/CheckListsBarChart";
import ActivityTimeline from "../../components/ActivityTimeline/ActivityTimeline";
import CardCalendar from "../../components/CardCalendar/CardCalendar";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

const Dashboard: React.FC = () => {

    const [pieChartVariant, setPieChartVariant] = useState("incomplete");

    const handlePieChartOnClick = () => {
        const newVariant = pieChartVariant === "incomplete" ? "complete" : "incomplete";
        setPieChartVariant(newVariant);
    }

    return (
        <div>
            <div>
                <Lists />
            </div>

            <Grid container spacing={2} className="mt-8">
                <Grid item xs={6}>
                    <Paper className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-xl">{pieChartVariant === "incomplete" ? "Open" : "Closed"} Checklist Tasks</h3>
                            <Tooltip title="Display closed task">
                                <IconButton
                                    type="button"
                                    className="bg-transparent border-none cursor-pointer rounded-full hover:bg-gray-300 w-8 h-8 flex items-center justify-center"
                                    onClick={handlePieChartOnClick}
                                >
                                    <FilterListIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className="flex justify-center border-t border-dashed border-gray-200">
                            <CheckListsPieChart variant={pieChartVariant} />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-xl">Checklist Tasks</h3>
                            <div className="flex gap-x-2">
                                <Chip label="complete" className="text-[10px] text-white p-0 h-[24px] bg-[#02B2AF]" />
                                <Chip label="incomplete" className="text-[10px] text-white p-0 h-[24px] bg-[#2E96FF]" />
                            </div>
                        </div>
                        <div className="flex justify-center border-t border-dashed border-gray-200 py-6">
                            <CheckListsBarChart />
                        </div>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={2} className="my-8">
                <Grid item xs={6}>
                    <Paper className="p-6">
                        <h3 className="font-bold text-xl mb-4">Activity on board</h3>
                        <div className="border-t border-dashed border-gray-200">
                            <ActivityTimeline />
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper className="p-6">
                    <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-xl">Tasks for this month</h3>
                            <div className="flex gap-x-2">
                                <Link to="calendar" className="text-xs font-medium no-underline text-blue-600">View all</Link>
                            </div>
                        </div>
                        <div className="calendar-widget border-t border-dashed border-gray-200">
                            <CardCalendar />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;