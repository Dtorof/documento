import app from './app.js'
import { db } from './db/db.js'


const PORT = process.env.PORT || 6000

async function dbConnection()  {
    try{
        await db.authenticate()
        await db.sync({force:false})
        console.log('Connection has been established successfully.')
        app.listen(PORT) 
        console.log(`Running on ` + PORT)
    } catch (error) {
        console.error('Unable to connect to the database:', error)
      }
}
dbConnection()