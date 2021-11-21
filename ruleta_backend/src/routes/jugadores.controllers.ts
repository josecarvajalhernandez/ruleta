import { RequestHandler } from "express";
import Jugador from './Jugador';
 
export const createJugador: RequestHandler = async (req, res) => {
    const jugadorFound = await Jugador.findOne({url: req.body.url})
    if(jugadorFound){
        return res.status(301).json({message: 'The URL already exists'});
    }
    const jugador = new Jugador (req.body);
    const savedJugador = await jugador.save();
   
    res.json(savedJugador);
}

export const getJugadores: RequestHandler = async(req, res) => {
    try{
        const jugadores = await Jugador.find()
        return res.json(jugadores);
    } catch (error){
        //return  res.json(error);  
        res.json(error); 
    }
    
    const jugadores = await Jugador.find();
    return res.json(jugadores);
}

export const getDefault: RequestHandler = async(req, res) => {
    try{
     //   const jugadores = await Jugador.find()
        const jugadores = ['algo','otro','probando','alfin esto pinta bien']
        console.log(jugadores);
     return res.json(jugadores);
    } catch (error){
        //return  res.json(error);  
        res.json(error); 
    }
    
    const jugadores = await Jugador.find();
    return res.json(jugadores);
}

const intervaloEjecutarRuleta = 180000;

setInterval(()=>{
    console.log('esto será la funcion core desde el ctrl:' + Date());
}, intervaloEjecutarRuleta);


export const getJugador: RequestHandler = async(req, res) => {
    //const jugadorFound = await Jugador.findById(req.params.id)
    const jugadorFound = await Jugador.findOne({_id:req.params.id})
    
    if(!jugadorFound){
        return res.status(200).json;
    }

    return res.json(jugadorFound);
}

export const deleteJugador: RequestHandler = async(req, res) => {
    const jugadorFound = await Jugador.findByIdAndDelete(req.params.id);
    if(!jugadorFound){
        return res.status(204).json();
    }
    return res.json(jugadorFound);
}

export const updateJugador: RequestHandler = async(req, res) => {
    const jugadorUpdated = await Jugador.findByIdAndUpdate(req.params.id, req.body,{ new:true });
    if(!jugadorUpdated){
        return res.status(204).json();
    }
    return res.json(jugadorUpdated);
}




