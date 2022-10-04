import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [left, setL] = useState<number>(3);
    const [r, setR] = useState<string>("0");
    const requested = parseInt(r) || 0;
    function useAttempts(): void {
        setL(left - 1);
    }
    function gainAttempts(n: number): void {
        setL(left + n);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="textbox">
                <Form.Label>Request: </Form.Label>
                <Form.Control
                    type="number"
                    value={r}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setR(event.target.value)
                    }
                />
            </Form.Group>
            <div>The amount of attempts left is {left}</div>
            <Button onClick={() => gainAttempts(requested)}>gain</Button>
            <Button onClick={useAttempts} disabled={left === 0}>
                use
            </Button>
        </div>
    );
}
