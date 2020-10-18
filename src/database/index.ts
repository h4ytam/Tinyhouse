import {MongoClient} from 'mongodb'
import {Database} from '../lib/types'


const url=
// `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/main?retryWrites=true&w=majority`

'mongodb://haytam:sLwinlghhkt0XtKJ@cluster0-shard-00-00.do0lw.mongodb.net:27017,cluster0-shard-00-01.do0lw.mongodb.net:27017,cluster0-shard-00-02.do0lw.mongodb.net:27017/main?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'



export const connectDatabase=async():Promise<Database>=>{
const client= await MongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
const db=client.db('main')

return{
    listings:db.collection("test_listings")

}
}