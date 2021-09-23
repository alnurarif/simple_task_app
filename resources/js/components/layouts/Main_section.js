import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Add_task_section from '../layouts/Add_task_section'
import Task_list_section from '../layouts/Task_list_section'
import Button_section from '../layouts/Button_section'
class Main_section extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<main>
		        <div className="container">
		            <div className="row tasks_container">
		                <div className="tasks_section">
	                        <Add_task_section
							allState={this.props.allState} 
							methods={this.props.methods}
							/>
							<Task_list_section
							allState={this.props.allState} 
							methods={this.props.methods}
							/>
	                        <Button_section
							allState={this.state} 
							methods={this.methods}
							/>
		                        
		                </div>
		            </div>
		        </div>
		    </main>
		)
	}
}

export default Main_section