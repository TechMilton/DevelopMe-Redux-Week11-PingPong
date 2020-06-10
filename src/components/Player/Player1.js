import { connect } from "react-redux";
import Player from "./Player";

import { player1 } from "../../data/actions";

const mapStateToProps = state => {
    return {
        playerName: state.player1Name,
        winner: state.winner,
        score: state.player1,
        serving: state.p1Serving,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch(player1()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
