import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [Qtype, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQType(): void {
        setQuestionType(
            Qtype === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <div>
            <Button onClick={changeQType}>Change Type</Button>
            {Qtype === "multiple_choice_question" ? (
                <div>Multiple Choice </div>
            ) : (
                <div>Short Answer</div>
            )}
        </div>
    );
}
