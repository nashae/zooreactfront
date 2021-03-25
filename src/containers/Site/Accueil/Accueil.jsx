import React, { Component } from 'react';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import banderole from '../../../assets/images/banderole.png';
import logo from "../../../assets/images/logo.png";

class Accueil extends Component {
    componentDidMount = () => {
        document.title = "parc d'animaux ZooReact"
    }

    render() {
        return (
            <div>
                <img src={banderole} alt="banderole" className="img-fluid"></img>
                <TitreH1 bgColor="bg-success">Venez visiter le parc ZooReact</TitreH1>
                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto ab nesciunt? Deleniti unde, voluptates molestiae exercitationem neque voluptatem repellat voluptas placeat id ea asperiores modi repellendus ducimus est nostrum?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto ab nesciunt? Deleniti unde, voluptates molestiae exercitationem neque voluptatem repellat voluptas placeat id ea asperiores modi repellendus ducimus est nostrum?
                    </p>
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={logo} alt="logo" className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus consectetur cumque facilis dolores libero inventore exercitationem quam perferendis perspiciatis consequuntur, modi obcaecati eum dolor voluptatum nihil! Tempore laudantium quam blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, excepturi nisi! Eius eos commodi deleniti amet doloribus accusantium laboriosam corporis, itaque harum eaque quas dolorem magnam pariatur dicta voluptatibus fugit.
                        </div>
                        <div className="col-12 col-md-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus consectetur cumque facilis dolores libero inventore exercitationem quam perferendis perspiciatis consequuntur, modi obcaecati eum dolor voluptatum nihil! Tempore laudantium quam blanditiis!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, excepturi nisi! Eius eos commodi deleniti amet doloribus accusantium laboriosam corporis, itaque harum eaque quas dolorem magnam pariatur dicta voluptatibus fugit.
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={logo} alt="logo" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accueil;