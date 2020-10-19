/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {IResolvers} from 'apollo-server-express'
import {Database,Listing} from '../../../lib/types'
import {ObjectId} from 'mongodb'

export const listingResolvers:IResolvers={
    Query:{
        // eslint-disable-next-line @typescript-eslint/ban-types
        listings:async(_root:undefined,_args:{},{db}:{db:Database}):Promise<Listing[]>=>{
            return await db.listings.find({}).toArray()
        }
    },
    Mutation:{
        deleteListing:async(
            _root: undefined,
            {id}: {id: string},
            {db}:{db:Database}
            ):Promise<Listing>=>{
           const deleteRes=await db.listings.findOneAndDelete({
               _id:new ObjectId(id)
           })
           if(!deleteRes.value){
               throw new Error("failed to delete Listing");

           }
           return deleteRes.value
        }
    },
    Listing:{
        id:(listing:Listing)=>listing._id.toHexString()
    }
};