import React, { useState } from 'react';

//To Create a counter
//You can only use hook inside a function component and not in class component
function Counter(){
    const [count, setCount] = useState(0)

    return(
    <div>
        <h1>
            {count}
        </h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Sub</button>
    </div>    
        )
}

export default Counter;