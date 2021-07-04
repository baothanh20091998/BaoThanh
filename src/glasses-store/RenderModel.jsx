import React, { Component } from 'react'

export default class RenderModel extends Component {

    render() {
        const state = this.props.state;
        return (
            <div>
                <img
                    className="card-img-top"
                    src="./img/glassesImage/model.jpg"
                    alt="hinh model"
                />
                <img
                    src={state.modelImg}
                    alt="kinh"
                    style={{
                        width: 170,
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: "16%",
                    }}
                />
                <div className="card-body">
                    <span className="card-title badge-danger h3 px-2 rounded">
                        {state.modelPrice}
                    </span>
                    <p className="card-text mt-2">{state.modelName}</p>
                </div>
            </div>
        )
    }
}
