import React from 'react'
import "./Presenter.css"
import img1 from "./images/img1.jpeg"

export default function Presenter() {
    return (
        <div className="presenter"  styles={{ backgroundImage:`url(${img1})`}}>
            <div style={{zIndex: "7"}} >
                <p style={{zIndex: "7"}} className="subtitle">Gérez votre école de sport facilement avec</p>
                <h1 style={{zIndex: "7"}}>SPORT OFFICE.</h1>
                <p className="subtitle">Faciliter l’apprentissage des sports Outdoor</p>
                <p>Simplifiez la gestion des réservations grâce à un <strong>système de réservation en temps réel.</strong> </p>
                <p>Distribuez vos cours au-delà de vos canaux traditionnels en vous connectant automatiquement à des centaines <strong>de sites de réservation partenaires.</strong></p>
                <p><strong>Gérez automatiquement</strong> les relances clients, le suivi des paiements et le partage des informations à vos moniteurs grâce à la connexion aux outils tiers.</p>
            </div>
        </div>
    )
}
