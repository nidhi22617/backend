// require ('dotenv').config({path: './env'})

import dotnev from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotnev.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT) || 8000,() => {
        console.log(`⚙️ Sever is running at port : ${ process.env.PORT}`);
    }
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
    
})







/*

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERRR", error);
            throw error
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
        
    } catch (error) {
        console.error("ERROR:", error);
        throw err
        
    }
})()*/