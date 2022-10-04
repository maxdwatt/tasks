import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStatus] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="switch"
                label="Edit"
                checked={edit}
                onChange={updateMode}
            />
            <div>
                {edit ? (
                    <>
                        <Form.Check
                            type="checkbox"
                            id="is-student-check"
                            label="student"
                            checked={student}
                            onChange={updateStatus}
                        />
                        <Form.Group controlId="textbox">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                    </>
                ) : (
                    <div>
                        {name} is {student ? "a" : "not a"} student
                    </div>
                )}
            </div>
        </div>
    );
}
