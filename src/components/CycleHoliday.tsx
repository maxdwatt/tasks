import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Halloween"
    | "Christmas Eve"
    | "New Years Eve"
    | "Juneteenth"
    | "Martin Luther King Jr Day";
const year_t: Record<Holiday, Holiday> = {
    "Martin Luther King Jr Day": "Juneteenth",
    Juneteenth: "Halloween",
    Halloween: "Christmas Eve",
    "Christmas Eve": "New Years Eve",
    "New Years Eve": "Martin Luther King Jr Day"
};
const alphabet: Record<Holiday, Holiday> = {
    "Christmas Eve": "Halloween",
    Halloween: "Juneteenth",
    Juneteenth: "Martin Luther King Jr Day",
    "Martin Luther King Jr Day": "New Years Eve",
    "New Years Eve": "Christmas Eve"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("New Years Eve");
    function byDate(): void {
        const newHD = year_t[holiday];
        setHoliday(newHD);
    }
    function byAlph(): void {
        const newHA = alphabet[holiday];
        setHoliday(newHA);
    }
    function getEmoji(h: Holiday): string {
        if (h === "Christmas Eve") {
            return "🎄";
        }
        if (h === "Halloween") {
            return "👻";
        }
        if (h === "Juneteenth") {
            return "🧑🏾";
        }
        if (h === "Martin Luther King Jr Day") {
            return "👴🏾";
        }
        return "🍾";
    }
    return (
        <div>
            <Button onClick={byDate}>Sort Alphabetically</Button>
            <Button onClick={byAlph}>Sort By Year</Button>
            <span>Holiday: {getEmoji(holiday)}</span>
        </div>
    );
}
