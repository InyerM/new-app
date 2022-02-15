import React from "react"
import fb from "../images/Facebook.png"
import './styles/card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <img src={fb} className="img-responsive ms-5" width="120" height="120"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>Facebook</h1>
                            <p>Talk and share all you want with your friends</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card