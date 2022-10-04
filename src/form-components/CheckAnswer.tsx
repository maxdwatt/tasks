import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState("");
    function updateAns(event: React.ChangeEvent<HTMLInputElement>) {
        setAns(event.target.value);
    }
    function isCorrect(s: string): string {
        if (s === expectedAnswer) {
            return "✔️";
        }
        return "❌";
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="textbox">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={ans} onChange={updateAns} />
            </Form.Group>
            <div>
                <span>{isCorrect(ans)}</span>
            </div>
        </div>
    );
}
