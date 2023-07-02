// config.js
import mongoose from 'mongoose';
const Config = ()=>{

    const conectar=()=>{mongoose.connect('mongodb+srv://sigleto:mongoDos2ª@cluster0.yj61bca.mongodb.net/formulario?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });}
    return(
        <>
        {conectar}
        </>
    )
};



export default Config;