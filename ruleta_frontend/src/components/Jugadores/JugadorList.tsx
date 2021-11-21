import { useEffect, useState } from 'react';
import { Jugador } from './Jugador';
import * as JugadorService from './JugadorService';
import JugadorItem from './JugadorItems';

const JugadorList = () => {

    const [jugadores, setJugadores] = useState<Jugador[]>([])

    const loadJugadores = async() => {
        const res = await JugadorService.getJugadores()
     
        const formatedJugadores = res.data.map(jugador=>{
            return{
                ...jugador,
                createdAt: jugador.createdAt ? new Date(jugador.createdAt) : new Date(),
                updatedAt: jugador.updatedAt ? new Date(jugador.updatedAt) : new Date()
            }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        setJugadores(formatedJugadores);
    }

    useEffect(() => {
        loadJugadores()
    }, [])

    return(
        <div className="row">
            {jugadores.map((jugador) =>{ 
                return <JugadorItem jugador={jugador} key={jugador._id} loadJugadores={loadJugadores}/>
            })}
        </div>
    )
}


export default JugadorList 
