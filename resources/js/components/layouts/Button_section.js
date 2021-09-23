import React, { Component } from 'react'
const Button_section = (props) => {
  	return (
        <div className="row mt-3">
            <div className="col-12">
                <button className="btn bg-light-sky border-color-light-sky fw-bold full-width margin-bottom margin-right">Save</button>
                <button className="btn bg-light-sky border-color-light-sky fw-bold full-width margin-bottom margin-right">Load</button>
                <button className="btn bg-light-sky border-color-light-sky fw-bold full-width margin-bottom margin-right">Clear</button>
            </div>
        </div>
  	)
}
export default Button_section

