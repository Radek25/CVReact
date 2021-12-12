import React, { FC }  from "react";
import { AutoTypeWrapper } from "./AutoTypeStyle";

interface IAutoTextData{
    width: number;
    letterSpacing: number;
    duration: number;
    stepsNumber: number;
    color: string;
    text: string;
}

export const AutoType: FC<IAutoTextData> = (props) =>{
    return(
        <AutoTypeWrapper width={props.width} letterSpacing={props.letterSpacing} duration={props.duration} stepsNumber={props.stepsNumber} color={props.color}>
            <h1>{props.text}</h1>
        </AutoTypeWrapper>
    );
};