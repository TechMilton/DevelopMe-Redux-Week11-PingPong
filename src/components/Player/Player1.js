import { connect } from "react-redux";

import Player from "./Player";

const mapStateToProps = state => {
    return {
        playerName: "Player 1",
        winner: state.winner,
        score: state.player1,
        serving: state.p1Serving,
    };
};

export default connect(mapStateToProps)(Player);