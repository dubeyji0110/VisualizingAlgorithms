import React from "react";
import AnimateHeight from "react-animate-height";
import "../App.css";

const barStyle = (color, height) => {
    const h = height.toString() + "px";
    return {
        height: h,
        backgroundColor: color,
        width: "25px",
        borderRadius: "0 0 4px 4px",
        marginLeft: "10px",
        textAlign: "center",
        fontSize: "15px",
        fontWeight: "200"
    };
};

const addBars = barList => {
    let tmpBarList = [];
    for (let i = 0; i < barList.length; i++){
        tmpBarList.push(
            <AnimateHeight duration={500} height={barList[i]["barHeight"]}>
                <div className="bar" style={barStyle(barList[i]["barColor"], barList[i]["barHeight"])} key={i}>
                    {barList[i]["barHeight"]}
                </div>
            </AnimateHeight>
        );
    }
    return tmpBarList;
};

export default addBars;