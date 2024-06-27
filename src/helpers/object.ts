export const getUserId = (obj: any) => {
    if (obj && obj.hasOwnProperty("id")) {
        return obj.id;
    }
    return false;
}

export const getBoardId = (obj: any) => {
    if (obj && obj.hasOwnProperty("id")) {
        return obj.id;
    }
    return false;
}

export const getBoardName = (obj: any) => {
    if (obj && obj.hasOwnProperty("name")) {
        return obj.name;
    }
    return false;
}

export const getListId = (obj: any) => {
    if (obj && obj.hasOwnProperty("id")) {
        return obj.id;
    }
    return false;
}