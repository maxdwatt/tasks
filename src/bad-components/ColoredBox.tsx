import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];

/*function ChangeColor(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    function ottn(): void {
        if (colorIndex < COLORS.length) {
            setColorIndex(colorIndex + 1);
        }
        if (colorIndex === COLORS.length) {
            setColorIndex(0);
        }
    }
    return <Button onClick={() => setColorIndex}>Next Color</Button>;
}*/

/*function ColorPreview(): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[0],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}*/

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(0);
    function ottn(): void {
        if (colorIndex < COLORS.length - 1) {
            setColorIndex(colorIndex + 1);
        }
        if (colorIndex === COLORS.length - 1) {
            setColorIndex(0);
        }
    }
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <Button onClick={ottn}>Next Color</Button>
            </div>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        </div>
    );
}
