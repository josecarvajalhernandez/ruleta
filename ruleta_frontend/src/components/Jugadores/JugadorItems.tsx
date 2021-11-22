import React from 'react'
import { Jugador } from './Jugador';
import {useNavigate} from 'react-router-dom';
import * as jugadorService from "./JugadorService";
import {toast} from 'react-toastify';

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
        toast.success('Jugador eliminado');
    }

    return(
        <tr className="jugador-row">
            <td className="text-center">{jugador.nombre}</td>
            <td align="right">{jugador.saldo}</td>
            <td className="text-center" onClick={()=> navigate(`/update/${jugador._id}`)}><button type="button" className="btn btn-success">Editar</button></td>
            <td className="text-center"><span className="text-danger jugador-row-delete" onClick={() => jugador._id && handleDelete(jugador._id)}>X</span></td>    
        </tr>
    )
}
export default JugadorItem