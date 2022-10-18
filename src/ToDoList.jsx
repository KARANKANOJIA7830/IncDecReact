import React, { useState } from "react";
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';

const ToDoList = (s) => {
    const [num, setNum] = useState(0)

    const incNum = () => {
        setNum(num + 1);
    };

    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        } else {
            alert("Sorry, Isse jada decrement nhi hoga or Limit reached")
            setNum(0);
        }
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <button onClick={incNum} className="btn_green">
                            <ArrowUpwardSharpIcon />
                        </button>
                        <button onClick={decNum} className="btn_red">
                            <ArrowDownwardSharpIcon />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoList;