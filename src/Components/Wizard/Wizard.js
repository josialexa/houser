import React, { Component } from 'react'
import {Route, Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import store, {CLEAR} from '../../store'
import './Wizard.css'

class Wizard extends Component {
    constructor() {
        super()

        // this.state = {
        //     name: '',
        //     address: '',
        //     city: '',
        //     state: '',
        //     zip: '',
        //     img: '',
        //     mortgage: 0,
        //     rent: 0
        // }
    }

    clear = () => {
        store.dispatch({
            type: CLEAR
        })
    }

    render() {
        return (
            <div className='wizard'>
                <div className='form-menu'>
                    <span>Add New Listing</span>
                    <Link to='/'><button onClick={this.clear} className='wizard-cancel-button'>Cancel</button></Link>
                </div>
                <div className='step-container'>
                    <Route path='/wizard/step1' component={StepOne} />
                    <Route path='/wizard/step2' component={StepTwo} />
                    <Route path='/wizard/step3' component={StepThree} />
                </div>
            </div>
        )
    }
}

export default withRouter(Wizard)