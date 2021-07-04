import React, { Component } from "react";
import ButtonChangeModel from "./ButtonChangeModel";
import RenderModel from "./RenderModel";

export default class AppGlasses extends Component {
    state = {
        modelImg: "./img/glassesImage/v1.png",
        modelName: "GUCCI G8850U",
        modelPrice: "$30",
        listGlasses: [
            {
                srcImg: "./img/glassesImage/v1.png",
                price: "$30",
                name: "GUCCI G8850U",
            },
            {
                srcImg: "./img/glassesImage/v2.png",
                price: "$30",
                name: "GUCCI G8759H",
            },
            {
                srcImg: "./img/glassesImage/v3.png",
                price: "$30",
                name: "DIOR D6700HQ",
            },
            {
                srcImg: "./img/glassesImage/v4.png",
                price: "$30",
                name: "DIOR D6005U",
            },
            {
                srcImg: "./img/glassesImage/v5.png",
                price: "$30",
                name: "PRADA P8750",
            },
            {
                srcImg: "./img/glassesImage/v6.png",
                price: "$30",
                name: "PRADA P9700",
            },
            {
                srcImg: "./img/glassesImage/v7.png",
                price: "$30",
                name: "FENDI F8750",
            },
            {
                srcImg: "./img/glassesImage/v8.png",
                price: "$30",
                name: "FENDI F8500",
            },
            {
                srcImg: "./img/glassesImage/v9.png",
                price: "$30",
                name: "FENDI F4300",
            },
        ]
    };

    renderHTML = () => {
        return this.state.listGlasses.map((img, index) => (
            <ButtonChangeModel handleChangeModle={this.handleChangeModle} img={img} key={index} />
        ));
    };

    handleChangeModle = (modelSrc, price, name) => {
        this.setState({
            modelImg: modelSrc,
            modelPrice: price,
            modelName: name,
        })
    }

    renderModel = () => {
        return (
            <RenderModel state={this.state} />
        )
    }

    render() {
        return (
            <div>
                <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
                    <h2 className="text-center h2 text-white py-1">Glasses App</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="container row">
                            <section className="model d-flex justify-content-center col-5">
                                <div className="card text-left" style={{ width: 300, position: "relative" }}>
                                    {this.renderModel()}
                                </div>
                            </section>
                            <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                                {this.renderHTML()}
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
