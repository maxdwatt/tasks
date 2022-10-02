//import { findAllByAltText } from "@testing-library/react";
import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string): void {
        /*
        if (!team.includes(newMember)) {
            team.push(newMember);
        }
        */
        const there = team.find((name: string): boolean => name === newMember);
        if (there === undefined) {
            const newTeam = [...team, newMember];
            setTeam(newTeam);
        }
    }

    function clearTeam(): void {
        /*
        team = [];
        */
        const clearTeam: React.SetStateAction<string[]> = [];
        setTeam(clearTeam);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {PEOPLE.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => chooseMember(option)}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
