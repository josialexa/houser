import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import store, {STEP_ONE} from '../../store'

class StepOne extends Component {
    constructor() {
        super()

        this.reduxState = store.getState()

        this.state = {
            name: this.reduxState.name,
            address: this.reduxState.address,
            city: this.reduxState.city,
            state: this.reduxState.state,
            zip: this.reduxState.zip
            // img: this.reduxState.img,
            // mortgage: this.reduxState.mortgage,
            // rent: this.reduxState.rent
        }
    }

    componentDidMount() {
        store.subscribe(() => this.setState({
            name: this.reduxState.name,
            address: this.reduxState.address,
            city: this.reduxState.city,
            state: this.reduxState.state,
            zip: this.reduxState.zip
            // img: this.reduxState.img,
            // mortgage: this.reduxState.mortgage,
            // rent: this.reduxState.rent
        }))
    }

    handleChange = (e, tar) => {
        let updated = {}
        updated[tar] = e.target.value

        this.setState(updated)
    }

    next = () => {
        let payload = {...this.state}
        // const {name, address, city, state, zip} = this.state
        store.dispatch({
            type: STEP_ONE,
            payload: payload
        })

        this.props.history.push('/wizard/step2')
    }

    render() {
        return (
            <div className='step'>
                <div className='inputs'>
                    <div className='input-container'>
                        <span>Property Name</span>
                        <input className='input name' onChange={e => this.handleChange(e, 'name')} value={this.state.name}></input>
                    </div>
                    <div className='input-container'>
                        <span>Address</span>
                        <input className='input address-image-money' onChange={e => this.handleChange(e, 'address')} value={this.state.address}></input>
                    </div>
                    <div className='city-state-zip'>
                        <div className='input-container'>
                            <span>City</span>
                            <input className='input city' onChange={e => this.handleChange(e, 'city')} value={this.state.city}></input>
                        </div>
                        <div className='input-container'>
                            <span>State</span>
                            <input className='input state' onChange={e => this.handleChange(e, 'state')} value={this.state.state}></input>
                        </div>
                        <div className='input-container'>
                            <span>Zip</span>
                            <input className='input zip' onChange={e => this.handleChange(e, 'zip')} value={this.state.zip}></input>
                        </div>
                    </div>
                </div>
                <div className='one-button-container'>
                    <button onClick={this.next} className='form-nav'>Next</button>
                </div>
            </div>
        )
    }
}

export default withRouter(StepOne)