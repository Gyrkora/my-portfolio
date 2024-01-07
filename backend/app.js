import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import projectRouter from './routes/projectRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use('/', projectRouter);

const PORT = process.env.PORT || 3001;

mongoose.set('strictQuery', false);
mongoose
	.connect(
		`mongodb+srv://${process.env.USER}:${process.env.MONGO_URI}@clusterforportfolio.09elfpi.mongodb.net/portfolioDB?retryWrites=true&w=majority`
	)
	.then(() => app.listen(PORT))
	.then(() => console.log('connected TO db and listening to localhost'))
	.catch((err) => console.log(err));

//Fuentes para conectar backend con frontend
//https://www.youtube.com/watch?v=hYYd_3Tz6Zo&ab_channel=CodersArts

//https://www.mongodb.com/languages/mern-stack-tutorial
