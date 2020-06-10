import React, { Component } from "react";

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            player1Name: props.player1Name,
            player2Name: props.player2Name,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeP1 = this.handleChangeP1.bind(this);
        this.handleChangeP2 = this.handleChangeP2.bind(this);
    }

    handleChangeP1(e) {
        this.setState({ player1Name: e.currentTarget.value });
    }

    handleChangeP2(e) {
        this.setState({ player2Name: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
    }

    render() {
        let { player1Name } = this.state;
        let { player2Name } = this.state;

        return (
            <form className="form-group" onSubmit={this.handleSubmit} >

                {/* Player 1 Name */}
                <label className="font-weight-bold" for="player1Name">Player 1 Name:</label>
                <input
                    className="form-control"
                    onChange={this.handleChangeP1}
                    value={player1Name}>
                </input>

                {/* Player 2 Name */}
                <label className="font-weight-bold" for="player2Name">Player 2 Name:</label>
                <input
                    className="form-control"
                    onChange={this.handleChangeP2}
                    value={player2Name}>
                </input>

                {/* Submit Form */}
                <button>Start Game</button>

            </form>
        );
    };
}

export default Settings;