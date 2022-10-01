import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [r, setVisable] = useState<boolean>(false);

    function flipV(): void {
        setVisable(!r);
    }

    return (
        <div>
            <Button onClick={flipV}>Reveal Answer</Button>
            {r && <div>42</div>}
        </div>
    );
}
