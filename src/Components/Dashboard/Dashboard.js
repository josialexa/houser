import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import House from '../House/House'
import axios from 'axios'
import './Dashboard.css'

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount() {
        this.get()
    }

    get = () => {
        axios.get('/api/houses')
            .then(res => this.setState({houses: res.data}))
    }

    delete = (id) => {
        axios.delete(`/api/houses/${id}`)
            .then(res => this.get())
    }

    render() {
        return (
            <div className='dashboard'>
                <div className='dashboard-menu'>
                    <h1>Dashboard</h1>
                    <Link to='/wizard/step1'><button className='dashboard-add-button'>Add New Property</button></Link>
                </div>
                <hr />
                <span className='indent bold'>Home Listings</span>
                <div className='house-display'>
                    {this.state.houses.map(v => <House key={v.id} house={v} delete={this.delete} />)}
                </div>
            </div>
        )
    }
}
