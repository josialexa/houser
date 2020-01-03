import React, { Component } from 'react'
import {Route, Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            img: '',
            mortgage: 0,
            rent: 0
        }
    }

    render() {
        return (
            <div>
                <div>
                    <span>Add New Listing</span>
                    <Link to='/'><button>Cancel</button></Link>
                </div>
                <div>
                    <Route path='/wizard/step1' component={StepOne} />
                    <Route path='/wizard/step2' component={StepTwo} />
                    <Route path='/wizard/step3' component={StepThree} />
                </div>
            </div>
        )
    }
}

export default withRouter(Wizard)