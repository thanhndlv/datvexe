import React, { Component } from 'react'

export default class Ghe extends Component {

    constructor(props){
        super(props);
        this.state = {
            listClass:  this.props.doiTuongGhe.TrangThai ? "btn btn-danger" : "btn btn-secondary"
        }
    }

    chonGhe = () => {
        if(this.state.listClass == "btn btn-danger" ||this.state.listClass == "btn btn-success"){
            return
        }
        this.setState({
            listClass:  "btn btn-success"
        })
    }

    render() {
        
        return (
            <div>
                <button className={this.state.listClass} onClick={() => this.chonGhe()}>{this.props.doiTuongGhe.SoGhe}</button>
            </div>
        )
    }
}
