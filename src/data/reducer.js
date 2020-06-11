import initialState from "./initialState";

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });

const serving = state =>
    ({ ...state, p1Serving: (state.player1 + state.player2) % state.alernateEvery === 0 ? !state.p1Serving : state.p1Serving });

const winner = (state) =>
    ({ ...state, winner: state.player1 >= state.winningScore ? state.player1Name : (state.player2 >= state.winningScore ? state.player2Name : "") });

const saveSettingsReducer = (state, { player1Name, player2Name, winningScore, alernateEvery }) => {
    return { ...state, player1Name: player1Name, player2Name: player2Name, winningScore: winningScore, alernateEvery: alernateEvery, }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "PLAYER1": return winner(serving(player1(state)));
        case "PLAYER2": return winner(serving(player2(state)));
        case "RESET": return initialState;
        case "SAVE_SETTINGS": return saveSettingsReducer(state, action);
        default: return state;
    }
};

export default reducer;


