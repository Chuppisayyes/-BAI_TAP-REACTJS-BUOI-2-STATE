import React, { Component } from 'react'
import '../scss/index.css'
import data from "../dataGlasses.json";
export default class Glassapp extends Component {
    state = {
        glassesModel: "./glassesImage/v2.png",
      };
      entry = (e) => {
        this.setState({
          glassesModel: e.target.src,
        });
        console.log(e.target.src);
      };
      renderItem = () => {
        return data.map((item, index) => {
          return (
            <button key={index} onClick={this.entry}>
              <img src={item.url} alt="" />
            </button>
          );
        });
      };
    render() {
        return (
        <div className="header">
            <div className="container">
                <div className="title">
                    <h2>TRY GLASSES APP ONLINE</h2>
                </div>
                <div className="content">
                    <div className="model">
                        <div className="model1">
                            <img src="./glassesImage/model.jpg" alt="" className="model_1" />
                            <div className="glasses_model">
                                    <img src={this.state.glassesModel} alt="" />
                            </div>
                        </div>
                        <div className="model2">
                            <img src="./glassesImage/model.jpg" alt="" className="model_2" />
                        </div>
                    </div>
                    <div className="glasses">
                        <div className="list_glasses">
                            <div className="item">{this.renderItem()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

