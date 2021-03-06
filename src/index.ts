import express,{Application} from "express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

import {ApolloServer} from 'apollo-server-express'
import {connectDatabase} from './database'
import {typeDefs,resolvers} from './graphql'


const mount= async(app:Application)=>{
    const db=await connectDatabase()
    const server= new ApolloServer({
        typeDefs,
        resolvers,
        context:()=>({db})
    })
    server.applyMiddleware({app,path:'/api'})
    app.listen(process.env.PORT);

    console.log(`app is running on ${process.env.PORT}`);



}
mount(express())
