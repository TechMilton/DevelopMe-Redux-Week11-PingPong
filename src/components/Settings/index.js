import { connect } from "react-redux";
import Settings from "./Settings";
import { saveSettings } from "../../data/actions"
import history from "../../history";

const mapStateToProps = state => {
    return {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
        winningScore: state.winningScore,
        alernateEvery: state.alernateEvery,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => {
            dispatch(saveSettings(data));
            history.push("/");
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);