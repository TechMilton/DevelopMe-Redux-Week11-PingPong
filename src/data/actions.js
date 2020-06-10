export const player1 = () => {
    return {
        type: "PLAYER1",

    };
};

export const player2 = () => {
    return {
        type: "PLAYER2",
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const saveSettings = (data) => {
    return {
        type: "SAVE_SETTINGS",
        player1Name: data.player1Name,
        player2Name: data.player2Name,
    };
};