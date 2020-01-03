import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import store, {STEP_THREE, CLEAR} from '../../store'

class StepThree extends Component {
    constructor() {
        super()

        this.state = {
            mortgage: store.getState().mortgage,
            rent: store.getState().rent
        }

        this.back = this.back.bind(this)
    }

    componentDidMount() {
        store.subscribe(() => this.setState({
            mortgage: store.getState().mortgage,
            rent: store.getState().rent
        }))
    }

    handChange = (e, tar) => {
        let updated = {}
        updated[tar] = e.target.value

        this.setState(updated)
    }

    post = () => {
        console.log('click')
        const {name, address, city, state, zip, img} = store.getState()
        const {mortgage, rent} = this.state
        axios.post('/api/houses', {name, address, city, state, zip, img, mortgage, rent})
            .then(res => {
                store.dispatch({
                    type: CLEAR
                })
                this.props.history.push('/')
            })
            .catch(err => alert(err.response.request.response))
    }

    back() {
        let payload = {...this.state}
        store.dispatch({
            type: STEP_THREE,
            payload: payload
        })

        this.props.history.push('/wizard/step2')
    }

    render() {
        return (
            <div className='step-3'>
                <div class='inputs'>
                    <div className=''>
                        <span>Recommended Rent: $</span><span>{this.state.mortgage * 1.25}</span>
                    </div>
                    <div className='input-container'>
                        <span>Monthly Mortgage Amount</span>
                        <input className='address-image-money' onChange={e => this.handChange(e, 'mortgage')} value={this.state.mortgage}></input>
                    </div>
                    <div className='input-container'>
                        <span>Desired Monthly Rent</span>
                        <input className='address-image-money' onChange={e => this.handChange(e, 'rent')} value={this.state.rent}></input>
                    </div>
                </div>
                <div className='two-button-container'>
                    <button className='form-nav' onClick={this.back}>Back</button>
                    <button className='form-nav complete' onClick={this.post}>Complete</button>
                </div>
            </div>
        )
    }
}

export default withRouter(StepThree)