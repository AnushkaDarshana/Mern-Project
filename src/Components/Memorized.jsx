import React from 'react';

const MemoizedComponent = React.memo(function MemoizedComponent(props) {
    console.log("Memoized component rendered!");
    return <div>{props.name}</div>;
});

export default MemoizedComponent;

