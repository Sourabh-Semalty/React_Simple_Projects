import React from "react";

import './ChartBar.css';
const ChartBar = (props) => {
    let ballFillHeight = "0%";

    if (props.maxalue > 0)
        ballFillHeight = Math.round((props.value / props.maxalue) * 100) + "%";

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: ballFillHeight }}
                ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;
