import React, { Component } from 'react'
const Add_task_section = (props) => {
  return (
        <div className="row">
            <div className="col-10">
                <input 
                type="text" 
                className="form-control bg-light-sky border-color-light-sky" 
                name="task_name" 
                placeholder="Task Name"
                value={props.allState.task_name}
                onChange={(e) => props.methods.changeInput(e)}/>
            </div>
            <div className="div col-2">
                <button 
                className="btn btn-primary bg-light-sky border-color-light-sky text-sky"
                onClick={(e) => props.methods.addTaskToList(e)}
                >
                    <i className="fas fa-plus"></i>
                </button>

            </div>
        </div>
  )
}
export default Add_task_section