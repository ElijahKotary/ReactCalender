import React from "react"

import DayOfWeek from "./dayOfWeek"
import CalenderBox from "./calenderBox"

export default function contentWrapper(props) {
    return (
        <div className="content-wrapper">
            <DayOfWeek day="Sunday" />
            <DayOfWeek day="Monday" />
            <DayOfWeek day="Tuesday" />
            <DayOfWeek day="Wednesday" />
            <DayOfWeek day="Thursday" />
            <DayOfWeek day="Friday" />
            <DayOfWeek day="Saturday" />
            <CalenderBox date="1" />
        </div>
    )
}