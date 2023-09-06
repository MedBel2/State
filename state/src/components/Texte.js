import React, { Component } from 'react'

export default class Texte extends Component {
    constructor(){
        super()
        this.state={
            desc:'Ons Jabeur, née le 28 août 1994 à Ksar Hellal, est une joueuse de tennis tunisienne, professionnelle depuis 2010. En devenant numéro 2 mondiale dans le classement WTA en 2022, Jabeur est devenue la joueuse tunisienne, arabe et africaine la mieux classée des classements WTA et ATP..'
        }
    }

  render() {
    return (
      <div>
       {this.state.desc}  
     </div>
    )
  }
}
