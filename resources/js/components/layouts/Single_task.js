import React, { Component } from 'react'

class Single_task extends React.Component{
    constructor(props){
        super(props)
    }
    state = {
        selected : 0
    }
    selectTheTask = (e) => {
        let selected = (this.state.selected == 0) ? 1 : 0
        this.setState({
            selected
        })
    }
    render(){
        return (
            <div className="row mt-3">
                <div className="col-md-1 col-2">
                    <button className={(this.state.selected == 0) ? 'btn border-color-dark-ash text-white' : 'btn border-color-dark-ash text-white bg-sky'} onClick={(e) => this.selectTheTask(e)}><i className="fas fa-check"></i></button>
                </div>
                <div className="col-md-9 col-8">
                    <p className="bg-light-sky task_name fw-bold">{this.props.single_task.name}</p>
                </div>
                <div className="div col-2">
                    <button className="btn border-color-ash text-ash" onClick={(e) => this.props.methods.removeTask(this.props.task_index)}><i className="fas fa-times"></i></button>
                </div>
            </div>

        )  

    }
}
export default Single_task