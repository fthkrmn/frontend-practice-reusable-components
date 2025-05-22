import React from "react"

export default function Card({ icon, title, descr }){
    return (
        <div className="card">
            <div className="wrapper">
                <div className="card-icon-bg">
                    {icon}
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <p>{descr}</p>
                </div>
            </div>
        </div>
    )
}