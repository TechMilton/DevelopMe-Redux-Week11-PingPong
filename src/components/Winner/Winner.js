import React from 'react';

const Winner = ({ winner }) => {

    return (
        winner === "" ? null :
            (<h2 className="alert alert-success"> {winner} wins!</h2>)
    );
};
export default Winner;