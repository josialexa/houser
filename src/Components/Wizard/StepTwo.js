import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class StepTwo extends Component {
    constructor() {
        super()

        this.state = {
            url: ''
        }
    }

    handleChange = (e) => {
        this.setState({url: e.target.value})
    }

    next = () => {
        this.props.history.push('/wizard/step3')
    }

    back = () => {
        this.props.history.push('/wizard/step1')
    }

    render() {
        return (
            <div>
                <div>
                    <span>Image URL</span>
                    <input onChange={e => this.handleChange} value={this.state.url}></input>
                </div>
                <div>
                    <button onClick={this.back}>Back</button>
                    <button onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default withRouter(StepTwo)