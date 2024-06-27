export const getUserBoardsCreated = (userId: string, boards: any) => {
    if (boards.length) {
        const userBoards = boards.filter((board: any) => board.idMemberCreator === userId && !board.closed);
        return userBoards.length ? userBoards : [];
    }

    return false;
}

export const countCards = (id: string, arr: any) => {
    try {
        if (id && arr && arr.length) {
            const count = arr.filter((list: any) => id === list.idList && list.dueComplete === false);

            if (count.length) {
                return count.length
            }

            return 0;            
        }

        return 0;
    } catch (e) {
        return 0
    }
}

export const getAllChecklistItems = (checkLists: any, lists: any, cards: any, variant: "incomplete" | "complete" | string = "incomplete") => {
    let items = [
        { id: 0, value: 0, label: "Concepts" },
        { id: 1, value: 0, label: "Design" },
        { id: 2, value: 0, label: "Development" },
        { id: 3, value: 0, label: "Testing" },
        { id: 4, value: 0, label: "Launch" },
    ]

    try {
        if (checkLists && lists && checkLists.length && lists.length) {
            for (const checkList of checkLists) {
                if (checkList.hasOwnProperty("checkItems")) {
                    for (const checkItem of checkList.checkItems) {
                        if (checkItem.state === variant) {
                            let card = cards.filter((card: any) => checkList.idCard === card.id);
    
                            if (card.length) {
                                let list = lists.filter((list: any) => card[0].idList === list.id);
                                
                                if (list.length) {
                                    const listName = list[0].name;
                                    const itemToUpdate = items.find((item: any) => item.label === listName)

                                    if (itemToUpdate) {
                                        itemToUpdate.value += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return items;
        }

        return items;
    } catch (e) {
        return items;
    }
}

export const getAllTask = (checkLists: any, variant: "incomplete" | "complete" = "incomplete") => {
    let tasks: any = [];

    try {
        if (checkLists && checkLists.length) {
            for (const checkList of checkLists) {
                if (checkList.hasOwnProperty("checkItems")) {
                    for (const checkItem of checkList.checkItems) {
                        if (checkItem.state === variant) {
                            tasks.push(checkItem);
                        }
                    }
                }
            }

            return tasks;
        }

        return tasks;
    } catch (e) {
        return tasks;
    }
}

export const getBarChartData = (lists: any, cards: any, checkLists: any) => {

    // console.log(lists)
    // console.log(cards)
    // console.log(checkLists)

    let incomplete = [0, 0, 0, 0, 0];
    let complete = [0, 0, 0, 0, 0];

    let items = [
        { data: complete },
        { data: incomplete },
    ]

    try {

        if (lists && lists.length && cards && cards.length && checkLists && checkLists.length) {

            let conceptsCompleteCount = 0;
            let conceptsIncompleteCount = 0;
            let designCompleteCount = 0;
            let designIncompleteCount = 0;
            let developmentCompleteCount = 0;
            let developIncompleteCount = 0;
            let testingCompleteCount = 0;
            let testingIncompleteCount = 0;
            let launchCompleteCount = 0;
            let launchIncompleteCount = 0;

            for (const checklist of checkLists) {
                const idCard = checklist.idCard;

                const card = cards.find((card: any) => card.id === idCard);

                if (card) {
                    const idList = card.idList;
                    
                    const list = lists.find((list: any) => list.id === idList);
                    
                    if (list) {
                        const listName = list.name;
                        
                        if (listName === "Concepts") {
                            const filterComplete = checklist.checkItems.filter((item: any) => item.state === "complete");
                            const filterIncomplete = checklist.checkItems.filter((item: any) => item.state === "incomplete");
                            
                            conceptsCompleteCount += filterComplete.length;
                            conceptsIncompleteCount += filterIncomplete.length;
                        }

                        if (listName === "Design") {
                            const filterComplete = checklist.checkItems.filter((item: any) => item.state === "complete");
                            const filterIncomplete = checklist.checkItems.filter((item: any) => item.state === "incomplete");
 
                            designCompleteCount += filterComplete.length;
                            designIncompleteCount += filterIncomplete.length;
                        }

                        if (listName === "Development") {
                            const filterComplete = checklist.checkItems.filter((item: any) => item.state === "complete");
                            const filterIncomplete = checklist.checkItems.filter((item: any) => item.state === "incomplete");
 
                            developmentCompleteCount += filterComplete.length;
                            developIncompleteCount += filterIncomplete.length;
                        }

                        if (listName === "Testing") {
                            const filterComplete = checklist.checkItems.filter((item: any) => item.state === "complete");
                            const filterIncomplete = checklist.checkItems.filter((item: any) => item.state === "incomplete");
 
                            testingCompleteCount += filterComplete.length;
                            testingIncompleteCount += filterIncomplete.length;
                        }

                        if (listName === "Launch") {
                            const filterComplete = checklist.checkItems.filter((item: any) => item.state === "complete");
                            const filterIncomplete = checklist.checkItems.filter((item: any) => item.state === "incomplete");
 
                            launchCompleteCount += filterComplete.length;
                            launchIncompleteCount += filterIncomplete.length;
                        }
                    }
                }
            }

            return [
                { data: [conceptsCompleteCount, designCompleteCount, developmentCompleteCount, testingCompleteCount, launchCompleteCount] },
                { data: [conceptsIncompleteCount, designIncompleteCount, developIncompleteCount, testingIncompleteCount, launchIncompleteCount] },
            ]
        }
        
        return items;
    } catch (e) {
        return items;
    }
}