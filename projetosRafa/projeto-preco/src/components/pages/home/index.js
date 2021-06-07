import React from 'react'
import './Home.css'
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'

function Home(){
    return (
        <div className="container">
            <div className="box personal">
                <div className="image-name">
                    <img src={icon1} alt="Icone do pacote 'icone personal'" className="icone-personal"/>
                    <h2>personal</h2>
                </div>
                <div className="info">
                    <h3 className="primeiro">Custom domains</h3>
                    <h3>sleeps After 30 mins of inactivity</h3>
                </div>
                <div className="price-button">
                    <span>free</span>
                    <button className="btn left-button">sign up</button>
                </div>
            </div>
            <div className="box small-team">
                <div className="image-name">
                    <img src={icon2} alt="Icone do pacote 'small team'" classname="icone-small-team"/>
                    <h2>small-team</h2>
                </div>
                <div className="info">
                    <h3 className="primeiro">Never sleeps</h3>
                    <h3>Multiple workers for more powerfull apps</h3>
                </div>
                <div className="price-button">
                    <span>R$150</span>
                    <button className="btn mid-button">free trial</button>
                </div>
            </div>
            <div className="box enterprise">
                <div className="image-name">
                    <img src={icon3} alt="Icone do pacote 'enterprise'" className="icon-enterprise"/>
                    <h2>enterprise</h2>
                </div>
                <div className="info">
                    <h3 className="primeiro">Dedicated</h3>
                    <h3>Simple horizontal scalability</h3>
                </div>
                <div className="price-button">
                    <span>R$400</span>
                    <button className="btn right-button">free trial</button>
                </div>
            </div>
        </div>
    )
}

export default Home