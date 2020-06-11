import React, { Component } from "react";

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            player1Name: props.player1Name,
            player2Name: props.player2Name,
            winningScore: props.winningScore,
            alernateEvery: props.alernateEvery,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeP1 = this.handleChangeP1.bind(this);
        this.handleChangeP2 = this.handleChangeP2.bind(this);
        this.handleWinningScore = this.handleWinningScore.bind(this);
        this.handlealernateEvery = this.handlealernateEvery.bind(this);
    }

    handleChangeP1(e) {
        this.setState({ player1Name: e.currentTarget.value });
    }

    handleChangeP2(e) {
        this.setState({ player2Name: e.currentTarget.value });
    }

    handleWinningScore(e) {
        this.setState({ winningScore: e.currentTarget.value });
    }

    handlealernateEvery(e) {
        this.setState({ alernateEvery: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit({ ...this.state });
    }

    render() {
        let { player1Name, player2Name, winningScore, alernateEvery } = this.state;


        return (
            <form className="form-group" onSubmit={this.handleSubmit} >
                <div className="container">
                    <br />
                    {/* Player 1 Name */}
                    <label for="player1Name">Player 1 Name:</label>
                    <input
                        className="form-control"
                        onChange={this.handleChangeP1}
                        value={player1Name}
                        required>
                    </input>
                    <br />
                    {/* Player 2 Name */}
                    <label for="player2Name">Player 2 Name:</label>
                    <input
                        className="form-control"
                        onChange={this.handleChangeP2}
                        value={player2Name}
                        required>
                    </input>
                    <br />
                    <div class="form-group">
                        <label for="winningScore">Winning Score:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={winningScore}
                            onChange={this.handleWinningScore}>
                        </input>
                    </div>
                    <br />
                    <div class="form-group">
                        <label for="alernateEvery">Alernate Every:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={alernateEvery}
                            onChange={this.handlealernateEvery}>
                        </input>
                    </div>

                    <hr />

                    {/* Submit Form */}
                    <button className="btn btn-primary">Start Game</button>
                </div>
            </form >
        );
    };
}

export default Settings;