import { connect } from "react-redux";

import Player from "./Player";

const mapStateToProps = state => {
    return {
        playerName: "Player 2",
        winner: state.winner,
        score: state.player2,
        serving: !state.p1Serving,
    };
};

export default connect(mapStateToProps)(Player);