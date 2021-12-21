import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Footer(){
    return (
        <div className="footer">
            <p className={"tasks-left"}>tasks left</p>
            <div className="buttons">
                <div className="form_radio_btn">
                    <input id={"radio-1"} type={"radio"} name={"radio"} value={"1"}/>
                    <label htmlFor="radio-1">All</label>
                </div>
                <div className="form_radio_btn">
                    <input id={"radio-2"} type={"radio"} name={"radio"} value={"1"}/>
                    <label htmlFor="radio-2">ToDo</label>
                </div>
                <div className="form_radio_btn">
                    <input id={"radio-3"} type={"radio"} name={"radio"} value={"1"}/>
                    <label htmlFor="radio-3">Completed</label>
                </div>
                <div className="hidden">
                    <input id={"radio-4"} type={"radio"} name={"radio"} value={"1"}/>
                    <label htmlFor="radio-4">asdg</label>
                </div>
            </div>
        </div>
    )
}

