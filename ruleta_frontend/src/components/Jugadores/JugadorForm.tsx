import React, { ChangeEvent, FormEvent, useState,useEffect} from "react";
import { Jugador } from "./Jugador";
import * as  JugadorService  from "./JugadorService";
import {toast} from 'react-toastify';
import {useNavigate, useParams} from 'react-router-dom';
import { getJugadores } from './JugadorService';
type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 

interface Params{
  id: string;
}

const JugadorForm = () => {

  const navigate = useNavigate();
  const params = useParams();

  console.log(params);

  const initialState = {
    nombre:"",
    saldo:""
  }

  const [jugador, setJugador] = useState<Jugador>(initialState);
  const handleInputChange = (e: InputChange) => {
      setJugador({...jugador, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!params.id){
      await JugadorService.createJugador(jugador);
      toast.success('Ingresa Nuevo Jugador');
      setJugador(initialState);    
    }else{
      await JugadorService.updateJugador(params.id, jugador)
    }
   
    navigate('/');
    
  };

  const getJugador = async(id:string)=>{
    const res = await JugadorService.getJugador(id)
    const {nombre, saldo} = res.data;
    setJugador({nombre, saldo})
  }

  useEffect(()=>{
    if(params.id) getJugador(params.id);

  },[])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
              {
                params.id ?
                <h3>Actualizar Jugador</h3>
                :
                <h3>Ingresar Nuevo Juego</h3>
              }
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title*</label>

                <input
                  type="text"
                  name="nombre"
                  placeholder="Ingresa el nombre del nuevo participante"
                  className="form-control"
                  onChange={handleInputChange}
                  value={jugador.nombre}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label htmlFor="url">URL*</label>
                <input
                  type="text"
                  name="saldo"
                  id=""
                  placeholder="10000"
                  className="form-control"
                  onChange={handleInputChange}
                  value={jugador.saldo}
                />
              </div>
              {
                params.id ?
                <button className="btn btn-info">Actualizar</button>
                :
                <button className="btn btn-primary">Crear</button>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JugadorForm;
