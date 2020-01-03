import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class StepThree extends Component {
    constructor() {
        super()

        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    handChange = (e, tar) => {
        let updated = {}
        updated[tar] = e.target.value

        this.setState(updated)
    }

    post = () => {
        const {name, address, city, state, zip} = this.state
        axios.post('/api/houses', {name, address, city, state, zip})
            .then(res => this.props.history.push('/'))
            .catch(err => alert(err.response.request.response))
    }

    back = () => {
        this.props.history.push('/wizard/step2')
    }

    render() {
        return (
            <div>
                <div>
                    <span>Recommended Rent: $</span><span>{this.state.mortgage * 1.25}</span>
                </div>
                <div>
                    <span>Monthly Mortgage Amount</span>
                    <input onChange={e => this.handChange(e, 'mortgage')} value={this.state.rent}></input>
                </div>
                <div>
                    <span>Desired Monthly Rent</span>
                    <input onChange={e => this.handChange(e, 'rent')} value={this.state.rent}></input>
                </div>
                <div>
                    <button onClick={this.back}>Back</button>
                    <button onClick={this.props.post}>Complete</button>
                </div>
            </div>
        )
    }
}

export default withRouter(StepThree)