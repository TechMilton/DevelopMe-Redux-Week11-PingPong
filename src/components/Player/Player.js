import React from 'react';

const Player = ({ serving, score, handleClick, playerName, winner }) => {
    return (
        <div className="col-md-6 mt-4">
            <div className={"card text-center" + (serving ? " bg-dark text-white" : "")}>
                <h5 className="card-header">{playerName}</h5>
                <div className="card-body">
                    <p className="card-text display-1">{score}</p>
                </div>
                <div className="card-footer">
                    <button className={"form-control btn btn-success" + (winner ? " d-none" : "")} onClick={handleClick}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Player;