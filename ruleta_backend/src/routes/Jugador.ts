import {Schema, model} from 'mongoose'

const jugadorSchema =  new Schema({
    saldo:{
       type:Number,
       required:true,
    },
    nombre:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }

},{
    versionKey:false,
    timestamps:true
});

export default model('Jugador', jugadorSchema);