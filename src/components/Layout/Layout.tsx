import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setUserData } from "../../store/userDataSlice";
import { setActionData, setBoardData, setCardsData, setCheckListData, setListData } from "../../store/boardDataSlice";
import { getUserId, getBoardName, getBoardId, getListId } from "../../helpers/object";
import { getUserBoardsCreated } from "../../helpers/array";
import { fetchData, getActions, getCardChecklist, getCards, getLists, updateBoardIDEndpoint, updateCardsIDEndpoint } from "../../helpers/api";

import { Box, Grid, Skeleton } from "@mui/material";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

import { GET_AUTHENTICATED_USER, GET_MY_BOARDS, GET_MY_LISTS, GET_MY_CARDS } from "../../constants/apiEndpoints";


const Layout: React.FC = () => {

    const dispatch = useAppDispatch();

    const state = useAppSelector((state) => state);

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const { data } = await fetchData(GET_AUTHENTICATED_USER);

                dispatch(setUserData(data));
            } catch (e) {
                throw new Error('Network response was not ok');
            }
        }

        fetchUser();
    }, []);

    useEffect(() => {
        if (state.userData.data) {
            const fetchBoards = async () => {
                try {
                    const { data } = await fetchData(GET_MY_BOARDS);
                    const userId = getUserId(state.userData.data);
                    const userBoards = getUserBoardsCreated(userId, data);
                    const boardId = getBoardId(userBoards[0]);
                    const lists = await getLists(boardId);
                    const actions = await getActions(boardId);

                    let cardsArr: any = [];
                    let checkListsArr: any = [];

                    dispatch(setActionData(actions));

                    if (lists && lists.length) {
                        dispatch(setListData(lists));

                        for (const list of lists) {
                            const cards = await getCards(list)

                            if (cards && cards.length) {
                                for (const card of cards) {
                                    cardsArr.push(card)
                                    const checklistsData = await getCardChecklist(card);

                                    if (checklistsData && checklistsData.length) {
                                        checkListsArr.push(checklistsData[0]);
                                    }
                                }
                            }
                        };

                        dispatch(setCardsData(cardsArr));
                        dispatch(setCheckListData(checkListsArr));
                    }

                    dispatch(setBoardData(userBoards[0]));
                } catch (e) {
                    throw new Error('Network response was not ok');
                }
            }

            fetchBoards();
        }
    }, [state.userData.data]);

    // useEffect(() => {
    //     console.log(state)
    // }, [state])

    return (
        <Box className="h-full">
            <Grid container spacing={{ xs: 0, lg: 2}} className="h-full">
                <Grid item xs={2} className="border-r border-dashed border-gray-200 hidden lg:block">
                    <Sidebar />
                </Grid>
                <Grid item xs={12} lg={10} className="px-4 lg:px-12">
                    <Navbar />
                    <main>
                        {
                            state.boardData.data
                                ? <h1 className="font-extrabold text-3xl mb-10">{getBoardName(state.boardData.data)}</h1>
                                : <Skeleton width={250} height={36} variant="rounded" className="mb-10" />
                        }
                        <Outlet />
                    </main>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout;