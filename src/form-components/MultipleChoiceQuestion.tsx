import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiple-choice">
                <Form.Label>Selected an Anwswer</Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((answer: string) => (
                        <option key={answer} value={answer}>
                            {answer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{selected === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
