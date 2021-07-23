import React from 'react'
import './Form.css'

export default function Form() {
    return (
        <div>
            <form className="form">
                <label>Nom</label>
                <input placeholder="First Name" /><br />
                <label>Courrier électronique*</label>
                <input placeholder="Last Name" /><br />
                <label>Message*</label>
                <textarea  /><br />
                <label>
                    <input 
                        type="checkbox" 
                    /> J'accepte que ces données soient stockées et traitées dans le but d'établir un contact. Je suis conscient que je peux révoquer mon consentement à tout moment.*
                </label>
                <p>* Indique les champs obligatoires</p>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}
