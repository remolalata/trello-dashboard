import { GET_MY_ACTIONS, GET_MY_CARDS, GET_MY_CHECKLISTS, GET_MY_LISTS, UPDATE_MY_CHECLIST } from "../constants/apiEndpoints";

type UseFetchResponse<T> = {
    data: T | null;
    error: string | null;
    loading: boolean;
};

export const fetchData = async <T,>(url: string, options?: RequestInit): Promise<UseFetchResponse<T>> => {
    let data: T | null = null;
    let error: string | null = null;
    let loading: boolean = true;

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        data = await response.json() as T;
    } catch (err) {
        if (err instanceof Error) {
            error = err.message;
        } else {
            error = "An unknown error occurred";
        }
    } finally {
        loading = false;
    }

    return { data, error, loading };
};

export const updateChecklistEndpoint = (url: any, cardId: any, checkItemId: any) => {
    return url.replace("{cardId}", cardId).replace("{checkItemId}", checkItemId);
}

export const updateData = async (cardId: string, checkItemId: string, state: 'complete' | 'incomplete') => {
    const endpoint = updateChecklistEndpoint(UPDATE_MY_CHECLIST, cardId, checkItemId);

    await fetch(endpoint, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ state }),
    });
}

export const updateBoardIDEndpoint = (url: string, value: string) => {
    return url.replace("{boardId}", value);
}

export const getLists = async (boardId: any) => {
    try {
        const id = boardId;
        const endpoint = updateBoardIDEndpoint(GET_MY_LISTS, id);
        const { data }: any = await fetchData(endpoint);

        if (data && data.length) {
            return data;
        }

        return [];
    } catch (e) {
        return [];
    }
}

export const updateCardsIDEndpoint = (url: string, value: string) => {
    return url.replace("{listId}", value);
}

export const getCards = async (board: any) => {
    try {
        const id = board.id;
        const endpoint = updateCardsIDEndpoint(GET_MY_CARDS, id);
        const { data }: any = await fetchData(endpoint);

        if (data && data.length) {
            return data;
        }

        return [];
    } catch (e) {
        return [];
    }
}

export const updateChecklistsIDEndpoint = (url: string, value: string) => {
    return url.replace("{cardId}", value);
}

export const getCardChecklist = async (card: any) => {
    try {
        const id = card.id;
        const endpoint = updateChecklistsIDEndpoint(GET_MY_CHECKLISTS, id);
        const { data }: any = await fetchData(endpoint);

        if (data && data.length) {
            return data;
        }

        return [];
    } catch (e) {
        return [];
    }
}

export const updateActionsIDEndpoint = (url: string, value: string) => {
    return url.replace("{boardId}", value);
}

export const getActions = async (boardId: any) => {
    try {
        const endpoint = updateActionsIDEndpoint(GET_MY_ACTIONS, boardId);
        const { data }: any = await fetchData(endpoint);

        if (data && data.length) {
            return data;
        }

        return [];
    } catch (e) {
        return [];
    }
}