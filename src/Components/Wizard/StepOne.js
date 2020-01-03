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
            <div>
                <div>
                    <span>Property Name</span>
                    <input onChange={e => this.handleChange(e, 'name')} value={this.state.name}></input>
                </div>
                <div>
                    <span>Address</span>
                    <input onChange={e => this.handleChange(e, 'address')} value={this.state.address}></input>
                </div>
                <div>
                    <span>City</span>
                    <input onChange={e => this.handleChange(e, 'city')} value={this.state.city}></input>
                </div>
                <div>
                    <span>State</span>
                    <input onChange={e => this.handleChange(e, 'state')} value={this.state.state}></input>
                </div>
                <div>
                    <span>Zip</span>
                    <input onChange={e => this.handleChange(e, 'zip')} value={this.state.zip}></input>
                </div>
                <div>
                    <button onClick={this.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default withRouter(StepOne)