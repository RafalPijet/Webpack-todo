import React from "react";
import style from "../components/Button.css";

const ChangeButton = props => <button className={style.Button} onClick={() => props.setColor()}>Now is {props.name} color, the next color is {props.nextName}. Change?</button>

export default ChangeButton;