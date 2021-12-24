import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from "../../context";

const Index = ({count,filters}) => {
    const {findTodo, allTodo, findComplited, selectAllTodo, deleteAll} = useContext(Context)

    return (
        <div className="hidden" id={"footer"}>
            <button className={"tasks-left"} onClick={selectAllTodo} >{count} tasks left</button>
            <div className="buttons">
                <div className="form_radio_btn" onClick={allTodo}>
                    <input id={"radio-1"} type={"radio"} name={"radio"} value={"1"}/>
                    <label htmlFor="radio-1">All</label>
                </div>
                <div className="form_radio_btn" onClick={findTodo}>
                    <input id={"radio-2"} type={"radio"} name={"radio"} value={"1"} onClick={findTodo}/>
                    <label htmlFor="radio-2" onClick={findTodo}>ToDo</label>
                </div>
                <div className="form_radio_btn" onClick={() =>findComplited(1)}>
                    <input id={"radio-3"} type={"radio"} name={"radio"} value={"1"}/>
                    <label htmlFor="radio-3">Completed</label>
                </div>
                <div id="but">
                    <button className={"tasks-left"} onClick={deleteAll} >Clear completed</button>
                </div>
            </div>
        </div>
    )
}

export default Index

