import React, { useState } from "react";
import { Form } from "react-bootstrap";
export const Color = [
    "red",
    "cyan",
    "pink",
    "brown",
    "yellow",
    "purple",
    "blue",
    "black"
];
export function ChangeColor(): JSX.Element {
    const [c, setColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {Color.map((option: string) => (
                <div key={option}>
                    <Form.Check
                        inline
                        type="radio"
                        name="Colors"
                        onChange={updateColor}
                        id="color-check"
                        label={
                            <div style={{ background: option }}>{option}</div>
                        }
                        value={option}
                        checked={c === option}
                    />
                </div>
            ))}
            <div>
                You have chosen
                <div data-testid="colored-box" style={{ background: c }}>
                    {c}
                </div>
            </div>
        </div>
    );
}
