import React from "react";
// import Header from "../../components/Layout/Header";
import "./Academy.css"
import js from '../Academy/js.avif'
 const Academy = () => {
    return <>
    
        <h1>Academy</h1>
        <ul className="wrapper">
            <li className="list">
                <img src={js} alt="" className="div-img" />
                <div className="container">
                    <div className="one">
                        <p>kurs</p>
                        <p className="narx">narxi:249k so'm Bepul</p>
                    </div>
                    <div className="two">
                        <h3>Algoritmlar: Kirish</h3>
                        <p>Ma'lumot tuzilmalari, qidiruv algoritmlari, rekursiya va boshqa muhim algoritmik g'oyalar haqida o'rganamiz.</p>
                    </div>
                    <div className="three">
                        <button className="btn">Kursni Boshlash</button>
                    </div>
                </div>
            </li>
            <li className="list">
                <img src={js} alt="" className="div-img" />
                <div className="container">
                    <div className="one">
                        <p>kurs</p>
                        <p className="narx">Tez kunlarda</p>
                    </div>
                    <div className="two">
                        <h3>Python Asoslari</h3>
                        <p>Python dastulash tili va standart kutubxonasini boshdan oyoq ko'rib chiqamiz. Ajoyib loyihalar yaratib, muammolar yechishni o'rganamiz.</p>
                    </div>
                    
                </div>
            </li>
            <li className="list">
                <img src={js} alt="" className="div-img" />
                <div className="container">
                    <div className="one">
                        <p>kurs</p>
                        <p className="narx">Tez kunlarda</p>
                    </div>
                    <div className="two">
                        <h3>Go Dasturlash Tili</h3>
                        <p>Go dasturlash tiliga sayohat, ma'lumot tuzilmalari, standart kutubxonasi, konkurent dasturlar ustida ishlash haqida o'rganamiz.</p>
                    </div>
                </div>
            </li>
            <li className="list">
                <img src={js} alt="" className="div-img" />
                <div className="container">
                    <div className="one">
                        <p>kurs</p>
                        <p className="narx">Tez kunlarda</p>
                    </div>
                    <div className="two">
                        <h3>Zamonaviy DevOps</h3>
                        <p>DevOps'ning muhim g'oyalari, Linux Operatsion Tizimi, Bash, Docker, Kubernetes haqida no'ldan o'rganamiz.</p>
                    </div>
                    
                </div>
            </li>
        </ul>
    </>
}
export default Academy