import initialState from "./initialState";

const player1 = state => ({ ...state, player1: state.player1 + 1 });
const player2 = state => ({ ...state, player2: state.player2 + 1 });
const serving = state => ({ ...state, p1Serving: (state.player1 + state.player2) % 5 === 0 ? !state.p1Serving : state.p1Serving });
const winner = state => ({ ...state, winner: state.player1 >= 21 ? 1 : (state.player2 >= 21 ? 2 : 0) });

const reducer = (state, action) => {
    switch (action.type) {
        case "PLAYER1": return winner(serving(player1(state)));
        case "PLAYER2": return winner(serving(player2(state)));
        case "RESET": return initialState;
        default: return state;
    }
};

export default reducer;


