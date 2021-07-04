import React, { Component } from 'react'

export default class ListBtnChoice extends Component {
    render() {
        const btn = this.props.btn;
        return (
            <div >
                <button className="btn" onClick={() => this.props.handleChangeColor(btn.srcCar)}>
                    <img src={btn.srcIcon} alt="hinh" style={{ width: 50 }} />
                </button>
            </div >
        )
    }
}
