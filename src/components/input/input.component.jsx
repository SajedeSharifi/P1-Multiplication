import React, { useState } from "react";

import './input.style.css'

const Input = () => {
    let nextId = 0;
    const [firstNum, setFirstNum] = useState("");
    const [secNum, setSecNum] = useState("");
    const [mul, setMul] = useState("");
    const [results, setResults] = useState([]);

    const handleFirstNum = (e) => {
        setFirstNum(e.target.value);
    };
    const handleSecNum = (e) => {
        setSecNum(e.target.value);
    };

    function reset() {
        setFirstNum("");
        setSecNum("");
    }
    const multiply = (firstNum, secNum) => {
        let x = parseInt(firstNum, 0);
        let y = parseInt(secNum, 0);
        setMul(x*y);
        // console.log(x,y,mul);
        reset();
    };

    return (
        <div className="input-output-container">
            <div className="inputNum">
                <br />
                <h2>عدد اول</h2>
                <br />
                <input
                    className="first_num"
                    name="firstNum"
                    type="number"
                    value={firstNum}
                    onChange={handleFirstNum}
                    required
                />
                <br />
                <br />
                <h2>عدد دوم</h2>
                <br />
                <input
                    className="second_num"
                    name="secNum"
                    type="number"
                    value={secNum}
                    onChange={handleSecNum}
                    required
                />
                <br />
                <button
                    type="submit"
                    id="calculate_btn"
                    onClick={() => {
                        multiply(firstNum, secNum);
                        results.push({
                            id : nextId++,
                            value : mul
                        })
                    }}
                >
                    محاسبه
                </button>
            </div>

            <div
                className="output"
                
                style={{
                    'backgroundColor':
                        mul === "" ? 'rgb(230, 230, 250)'
                        : mul > 10 ? 'rgb(255, 182, 193)'
                        : mul < 10 ? 'rgb(144, 238, 144)'
                        : 'rgb(135, 206, 250)'
                }}
            >
                <br />
                نتیجه
                <p className="result">
                    {mul >= 0 ? mul : ""}
                </p>
                <ul>
                    {results.map((result) => (
                        <li key={results.id}>{result.value}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Input;