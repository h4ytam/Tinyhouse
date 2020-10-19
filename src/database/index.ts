import {MongoClient} from 'mongodb'
import {Database} from '../lib/types'

const url=
`mongodb://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER1}.mongodb.net:27017,${process.env.DB_CLUSTER2}.mongodb.net:27017,${process.env.DB_CLUSTER3}.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`


export const connectDatabase=async():Promise<Database>=>{
const client= await MongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
const db=client.db('main')

return{
    listings:db.collection("test_listings")

}
}