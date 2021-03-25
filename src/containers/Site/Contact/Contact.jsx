import axios from 'axios';
import React, {Component} from 'react';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import Formulaire from './Formulaire/Formulaire';

class Contact extends Component{

    componentDidMount = () => {
        document.title = "Page de contact"
    }

    handleEnvoiMail = (message) => {
        axios.post('http://localhost/serveuranimaux/front/sendMessage', message)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return(
            <>
                <TitreH1 bgColor="bg-success">Contactez-Nous</TitreH1>
                <div className="container">
                    <h2>Adresse</h2>
                    xxxxxxxxxxxxxxx
                    <h2>Télephone</h2>
                    12309907087
                    <h2>Vous préférez nous écrire?</h2>
                    <Formulaire sendMail={this.handleEnvoiMail}/>
                </div>
            </>
            
        )
    }
}

export default Contact;