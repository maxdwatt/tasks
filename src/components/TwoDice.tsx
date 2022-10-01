import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setL] = useState<number>(1);
    const [rightDie, setR] = useState<number>(0);
    return (
        <div>
            <Button onClick={() => setL(d6())}>Roll Left</Button>
            <span data-testid="left-die">{leftDie}</span>
            <Button onClick={() => setR(d6())}>Roll Right</Button>
            <span data-testid="right-die">{rightDie}</span>
            <div>
                {rightDie === leftDie && leftDie === 1 ? (
                    <span>Lose</span>
                ) : rightDie === leftDie ? (
                    <span>Win</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
