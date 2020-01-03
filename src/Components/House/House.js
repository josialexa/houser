import React, { Component } from 'react'

export default class House extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.house.img} />
                </div>
                <div>
                    <div><span>Property Name: </span>{this.props.house.name}<span></span></div>
                    <div><span>Address: </span><span>{this.props.house.address}</span></div>
                    <div><span>City: </span><span>{this.props.house.city}</span></div>
                    <div><span>State: </span><span>{this.props.house.state}</span></div>
                    <div><span>Zip: </span><span>{this.props.house.zip}</span></div>
                </div>
                <div>
                    <div><span>Monthly Mortgage: </span><span>{this.props.house.mortgage}</span></div>
                    <div><span>Desired Rent: </span><span>{this.props.house.rent}</span></div>
                </div>
                <div>
                    <button onClick={() => this.props.delete(this.props.house.id)}>X</button>
                </div>
            </div>
        )
    }
}
