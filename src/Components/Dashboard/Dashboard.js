import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import House from '../House/House'
import axios from 'axios'

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
            <div>
                Dashboard
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {this.state.houses.map(v => <House key={v.id} house={v} delete={this.delete} />)}
            </div>
        )
    }
}
