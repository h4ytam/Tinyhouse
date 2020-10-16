import {MongoClient} from 'mongodb'

const user="haytam"
const userPassowrd="384qRgkETqa0DYDg"
const cluster="cluster0.do0lw"
const url=
`mongodb+srv://${user}:${userPassowrd}@${cluster}.mongodb.net/main?retryWrites=true&w=majority`

export const connectDatabase=async()=>{
const client= await MongoClient.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
const db=client.db('main')

return{
    listings:db.collection("test_listings")
}
}