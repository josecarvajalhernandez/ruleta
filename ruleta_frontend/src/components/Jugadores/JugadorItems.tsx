import React from 'react'
import { Jugador } from './Jugador';
import {useNavigate} from 'react-router-dom';
import * as jugadorService from "./JugadorService";
import "./JugadorItem.css";

interface Props{
    jugador:Jugador;
    loadJugadores:()=>void;
}

const JugadorItem = ({jugador,loadJugadores}:Props) =>{
    const navigate = useNavigate();

    const handleDelete = async(id:string) => {
        await jugadorService.deleteJugador(id);
        loadJugadores();
    }

    return(
        <tr>
            
        <h2
            onClick={()=> navigate(`/update/${jugador._id}`)}
        >{jugador.nombre}</h2>
        <h3>Saldo Actual:{jugador.saldo}</h3>
        <span className="text-danger" onClick={() => jugador._id && handleDelete(jugador._id)}>X</span>    
        </tr>
    )
}
export default JugadorItem