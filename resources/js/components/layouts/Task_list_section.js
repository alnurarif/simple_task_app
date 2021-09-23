import React, { Component } from 'react'
import Single_task from './Single_task'
const Task_list_section = (props) => {
  	return (
        <div className="tasks_list">
        	{props.allState.tasks_list.map((single_task, index) => (
	        	<Single_task
	        	allState={props.allState} 
				methods={props.methods}
				key={index}
				task_index={index}
				single_task={single_task}
				/>

        	))}
        </div>
    )
}
export default Task_list_section

