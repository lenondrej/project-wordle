import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({value, answer}) {

return <div className="guess">
    {range(5).map(num => (<span className={value ? `cell ${checkGuess(value ? value.answer : undefined, answer)[num].status}` : "cell"} key={num}>{value ? value.answer[num] : undefined }</span>))}
</div>;
}

export default Guess;
