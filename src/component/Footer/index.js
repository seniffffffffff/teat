import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = ({count, findTodo, allTodo, findComplited, selectAllTodo, deleteAll,filteredTask}) => {

    const isShowButton = "showButton"

    return (
        <div className="footer">
            <button className={"tasks-left"} onClick={() => selectAllTodo()} >{count} tasks left</button>
            <div className="buttons">
                <div className="form_radio_btn" onClick={() => allTodo()}>
                    <input id={"radio-1"} type={"radio"} name={"radio"} value={"1"}/>
                    <label htmlFor="radio-1" id={"reset"}>All</label>
                </div>
                <div className="form_radio_btn" onClick={() => findTodo()}>
                    <input id={"radio-2"} type={"radio"} name={"radio"} value={"1"} />
                    <label htmlFor="radio-2" id={"reset"}>ToDo</label>
                </div>
                <div className="form_radio_btn" onClick={() =>findComplited(1)}>
                    <input id={"radio-3"} type={"radio"} name={"radio"} value={"1"}/>
                    <label htmlFor="radio-3" id={"reset"}>Completed</label>
                </div>
            </div>
            <button className={`tasks-left ${isShowButton ? "showButton": null}`} onClick={() => deleteAll()} >Clear completed</button>
        </div>
    )
}

export default Index

