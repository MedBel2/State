
import './App.css';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Texte from './components/Texte';

//creer une Classe:
export default class App extends Component {
  constructor(){ // creer un constructeur
    super()
    //initialition de State qui est composée de: Key: His Value,
    this.state={
       imgg:''https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoizJCqOpVu8MeslP1POuJoSiADiywLsy4g&usqp=CAU'',
       name:'Ons Jabeur',
       compter:0,
       show:false
      }

  }
   
  ascendant=()=>{                  //Function compteur ascendant
    this.setState({                //changer la Data de State
    compter: this.state.compter +1 //Incrémentation du compteur par 1
  })
  }
  descendant=()=>{                     //Function compteur descendant
    if (this.state.compter>0){         //Condition D'arret de la décrementation
    this.setState({                    //changer la Data de State
      compter: this.state.compter -1   //Déccrémentation du compteur par 1
    })
  }
  }
  toggle=()=>{                         //Function Afficher ou masquer
   
    this.setState({                    //changer la Data de State
      show: !this.state.show           //balancement de valeur de show càd si show est vraie elle change et devient fausse (<!>signifie Not)
    })
  }
 
  render() {
    return (
      <div>
        {/* Le contenu de l'HTML:j'ai pris un Card de bootstrap */}
         <Card className='contoure' style={{ width: '25rem' }}>
      <Card.Img className="avion" variant="top" src={this.state.imgg} />    {/*Appelation de notre State img*/}
      <Card.Body>
        <div>
        <h2>{this.state.compter}</h2>          {/*Appelation de notre state du compteur*/}
        <Button variant="primary" onClick={this.ascendant}>+</Button>{'  '} {/*Créer un boutton où on met une action (au clic:incremente la valeur de compteur par 1)*/}
        <Button variant="danger" onClick={this.descendant}>-</Button>{' '}  {/*Créer un boutton où on met une action (au clic:déccremente la valeur de compteur par 1)*/}
        </div>
        <hr/>

        <Card.Title><h3>{this.state.name}</h3></Card.Title>                { /*Appelation de notre state Nom du personne/}
        <Card.Text>
          {/*Condition: si this.state.show=0 ET Texte.js=1 alors la description va etre masquer càd=0
                     : si nn si this.state.show=1 Et Texte.js=1(toujours active) alors la desc va etre afficher càd=1*/}
          {this.state.show && <Texte/>}                                     
        </Card.Text>
        <Button variant="primary" onClick={this.toggle}>Afficher/Masquer BIO</Button> {/*Créer un boutton où on met une action (au clic:Changer la viibilité de la valeur de la description que l'on a importé depuis Texte.js)*/}
       
      </Card.Body>
    </Card>
      </div>
    )
  }
}
