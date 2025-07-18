import express from "express"
import 'dotenv/config';
import cors from 'cors'


import autRoutes from './routes/auth.routes'

if (!process.env.JWT_SECRET) {
    console.error('ERRO: JWT_SECRET não definido — abortando aplicação!');
    process.exit(1);
  }

const app = express()


app.use(cors())

app.use(express.json())

app.use('/api/v1/auth', autRoutes)

app.get("/heath", (_, res)=>{
    res.send({msg: "its working"})
})

const port = process.env.PORT ?? 8080;
app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
}); 