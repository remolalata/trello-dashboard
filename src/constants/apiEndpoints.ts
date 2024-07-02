const API_KEY = process.env.REACT_APP_TRELLO_API_KEY as string;
const API_TOKEN = process.env.REACT_APP_TRELLO_API_TOKEN as string;

export const TRELLO_API_BASE_URL = "https://api.trello.com/1";
export const GET_AUTHENTICATED_USER = `${TRELLO_API_BASE_URL}/members/me?key=${API_KEY}&token=${API_TOKEN}`;
export const GET_MY_BOARDS = `${TRELLO_API_BASE_URL}/members/me/boards?key=${API_KEY}&token=${API_TOKEN}`;
export const GET_MY_LISTS = `${TRELLO_API_BASE_URL}/boards/{boardId}/lists?key=${API_KEY}&token=${API_TOKEN}`;
export const GET_MY_CARDS = `${TRELLO_API_BASE_URL}/lists/{listId}/cards?key=${API_KEY}&token=${API_TOKEN}`;
export const GET_MY_CHECKLISTS = `${TRELLO_API_BASE_URL}/cards/{cardId}/checklists?key=${API_KEY}&token=${API_TOKEN}`;
export const GET_MY_ACTIONS = `${TRELLO_API_BASE_URL}/boards/{boardId}/actions?key=${API_KEY}&token=${API_TOKEN}&limit=6`;
export const UPDATE_MY_CHECLIST = `${TRELLO_API_BASE_URL}/cards/{cardId}/checkItem/{checkItemId}?key=${API_KEY}&token=${API_TOKEN}`;