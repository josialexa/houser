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
            <div className='step-2'>
                <div className='input-container'>
                    <span>Image URL</span>
                    <input className='input address-image-money' onChange={e => this.handleChange(e)} value={this.state.img}></input>
                </div>
                <div className='two-button-container'>
                    <button className='form-nav' onClick={this.back}>Back</button>
                    <button className='form-nav' onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default withRouter(StepTwo)