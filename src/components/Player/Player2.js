import { connect } from "react-redux";
import Player from "./Player";

import { player2 } from "../../data/actions";

const mapStateToProps = state => {
    return {
        playerName: "Player 2",
        winner: state.winner,
        score: state.player2,
        serving: !state.p1Serving,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch(player2()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);