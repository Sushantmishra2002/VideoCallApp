// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom'
// const HomePage = () => {
//     const [input, setInput] = useState("");
//     const navigate = useNavigate();
//     const submithandler = () => {
//         navigate('/room/${input');
//     }
//     return (
//         <div>
//           <div>
//             <inpput value={input} onChange={(e)=> setInput(e.target.value)} type = "text" placeholder = "Enter your name ...."/>
//              <button onClick={submithandler}>Join</button>
//          </div>
//     </div>
//     )
// }
// export default HomePage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submithandler = () => {
        navigate(`/room/${input}`); // Correct string interpolation with backticks
    };

    return (
        <div>
            <div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Enter Your Name....."
                />
                <button onClick={submithandler}>Join</button>
            </div>
        </div>
    );
};

export default HomePage;
