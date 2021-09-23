import React, {Component} from 'react'
import { getTaskList, storeNewTask, deleteTask } from '../../services/Task_services'
import Header_section from '../layouts/Header_section'
import Main_section from '../layouts/Main_section'
class Tasks_list extends Component{
	constructor(props){
		super(props)
	}
	state = {
		tasks_list : [],
		task_name : ''
	}
	methods = {
		getTasks : async () => {
			let taskList = await getTaskList()
			this.setState({
				tasks_list : taskList.data
			})
			
		},
		changeInput : (e) => {
			this.setState({
				[e.target.name] : e.target.value
			})
		},
		addTaskToList : async (e) => {
			let tasks_list = this.state.tasks_list
			storeNewTask({name : this.state.task_name}, (data) => {
				tasks_list.push(data)
				this.setState({
					tasks_list,
					task_name : ''
				})
			})
		},
		removeTask : (index) => {
			let tasks_list = this.state.tasks_list
			deleteTask(tasks_list[index].id, () => {
				tasks_list.splice(index, 1)
				this.setState({
					tasks_list
				})
			})
		}
	}
	componentDidMount(){
		this.methods.getTasks()
	}
	render(){

		return (
			<div>
				<Header_section
				allState={this.state} 
				methods={this.methods}
				/>
				<Main_section
				allState={this.state} 
				methods={this.methods}
				/>
			</div>
		)
	}
}

export default Tasks_list