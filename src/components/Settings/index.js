import { connect } from "react-redux";
import Settings from "./Settings";
import { saveSettings } from "../../data/actions"

const mapStateToProps = state => {
    return {
        player1Name: state.player1Name,
        player2Name: state.player2Name,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => dispatch(saveSettings(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);