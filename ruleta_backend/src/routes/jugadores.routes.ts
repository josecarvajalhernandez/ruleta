import { Router } from "express";
const router = Router();

import * as jugadorCtrl from './jugadores.controllers'

router.get('/jugadores', jugadorCtrl.getJugadores);

router.get('/jugadores/:id', jugadorCtrl.getJugador);

router.post('/jugadores',jugadorCtrl.createJugador);

router.delete('/jugadores/:id',jugadorCtrl.deleteJugador);

router.put('/jugadores/:id',jugadorCtrl.updateJugador);

export default router
