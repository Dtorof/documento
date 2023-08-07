import Users from "../models/users.model.js";
import bcryptjs from 'bcrypt';
import {genJWT} from "../helpers/generarJWT.js"


export const login =async(req,res=response)=>{
    const {email,password} =req.body;
    try{
        //Comprobar si existe el usuario/

        const user = await Users.findOne({ where: { email: email } });
        if(!user){
            return res.status(400).json({
                msg: "El email no existe",
                validLogin: false
            });
        }

        //Verificar password
        
        const validPassword = (password === user.password);
        console.log(user.password)
        if (!validPassword) {
            return res.status(400).json({
                msg: "Password incorrect - password",
                validLogin: false
            });
        }
        


        // Generar el JWT
        const token = await genJWT( user.id );
        res.json({
            user,
            token,
            validLogin: true
        })
       
        
    }catch(error){
        console.error("Error during login:", error); // Imprime el error en la consola
        res.status(500).json({
            msg:"habla con el administrador"
        });
    }
    
    
   
}