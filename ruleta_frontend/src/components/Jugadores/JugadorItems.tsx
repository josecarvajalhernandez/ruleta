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
        <div className="col-md-4 p-2">

            <div className="card card-body jugador-card">
                <div className="d-flex justify-content-between">
                    <h1
                        onClick={()=> navigate(`/update/${jugador._id}`)}
                    >{jugador.nombre}</h1>
                    <span className="text-danger" onClick={() => jugador._id && handleDelete(jugador._id)}>X</span>    
                </div>
            </div>
        </div>
    )
}
export default JugadorItem