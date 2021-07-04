import React, { Component } from 'react'

export default class ButtonChangeModel extends Component {
    render() {
        const img = this.props.img;
        return (

            <div className="col-3">
                <button className="btn btn-outline-secondary" onClick={() => this.props.handleChangeModle(img.srcImg, img.price, img.name)}>
                    <img
                        src={img.srcImg}
                        alt="hinh"
                        style={{ width: 100, borderRadius: 20 }}
                    />
                </button>
            </div>

        )
    }
}
