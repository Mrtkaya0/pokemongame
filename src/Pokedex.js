import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'



class Pokedex extends Component {
    render() {
        let title
        if (this.props.isWinner) {
            title = <h2 className='pokedex-winner'>Wining Player</h2>   
        } else {
            title = <h2 className='pokedex-loser'>Lozing Player</h2> 

        }
        return (
            <div className='Pokedex'>
                {title}
                <h4>Total Experience:{this.props.exp}</h4>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) => (
                        <Pokecard 
                        id={p.id} 
                        name={p.name} 
                        type={p.taype} 
                        exp={p.base_experience} 
                        />

                    ))}
                </div>
            </div>
        )
    }
}


export default Pokedex