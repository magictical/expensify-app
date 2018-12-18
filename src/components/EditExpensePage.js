import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is EditExpensePage compnent. This access Id is {props.match.params.id}
        </div>
    )
};

export default EditExpensePage;