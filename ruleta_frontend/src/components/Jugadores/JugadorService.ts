import axios from 'axios'
import { Jugador } from './Jugador';

const API ='http://localhost:3001';

export const getJugadores = async()=>{
    return await axios.get<Jugador[]>(`${API}/jugadores`)
}

export const createJugador = async(jugador:Jugador)=>{
    return await axios.post(`${API}/jugadores`, jugador)
}

export const getJugador = async(id:string)=>{
    return await axios.get<Jugador>(`${API}/jugadores/${id}`)
}

export const updateJugador = async(id:string,jugador:Jugador)=>{
    return await axios.put<Jugador>(`${API}/jugadores/${id}`, jugador)
}

export const deleteJugador = async(id:string)=>{
    return await axios.delete<Jugador>(`${API}/jugadores/${id}`)
}

  
