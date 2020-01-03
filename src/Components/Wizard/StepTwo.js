import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import store, {STEP_TWO} from '../../store'

class StepTwo extends Component {
    constructor() {
        super()

        this.state = {
            img: store.getState().img
        }
    }

    componentDidMount() {
        store.subscribe(() => this.setState({
            img: store.getState().img
        }))
    }

    handleChange = (e) => {
        this.setState({img: e.target.value})
    }

    next = () => {
        let payload = {...this.state}
        store.dispatch({
            type: STEP_TWO,
            payload: payload
        })

        this.props.history.push('/wizard/step3')
    }

    back = () => {
        let payload = {...this.state}
        store.dispatch({
            type: STEP_TWO,
            payload: payload
        })

        this.props.history.push('/wizard/step1')
    }

    render() {
        return (
            <div>
                <div>
                    <span>Image URL</span>
                    <input onChange={e => this.handleChange(e)} value={this.state.img}></input>
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