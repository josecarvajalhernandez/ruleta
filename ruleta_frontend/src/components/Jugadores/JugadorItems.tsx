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
            <td onClick={()=> navigate(`/update/${jugador._id}`)}>{jugador.nombre}</td>
            <td onClick={()=> navigate(`/update/${jugador._id}`)}>{jugador.saldo}</td>
            <td><span className="text-danger" onClick={() => jugador._id && handleDelete(jugador._id)}>X</span>    </td>    
            <h2
               
            ></h2>
            <h3></h3>
            
        </tr>
    )
}
export default JugadorItem