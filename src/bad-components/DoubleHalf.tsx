import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler(): void {
        setDhValue(2 * dhValue);
    }
    function Halver(): void {
        setDhValue(0.5 * dhValue);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                <Button onClick={Doubler}>Double</Button>
                <Button onClick={Halver}>Halve</Button>
                <span>{dhValue}</span>
            </div>
        </div>
    );
}
