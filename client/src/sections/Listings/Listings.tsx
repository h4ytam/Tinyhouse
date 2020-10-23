import React from 'react'
import {server} from '../../lib/api'
import {ListingData,DeleteListingData
    ,DeleteLisitingVariables} from './types'

const LISTINGS=`
query Listings{
    listings{
        id
        title
        image
        address
        price
        numOfGuests
        numOfBeds
        rating
    }
}
`
const DELETE_LISTING=`
    mutation DeleteListing($id:ID!){
        deleteListing(id:$id){
            id

        }
}`
interface Props{
    title:string
}

export const Listings=({title}:Props)=>{
    const fetchListing=async()=>{
        const {data}=await server.fetch<ListingData>({query:LISTINGS})
        console.log(data);
    }

    const deleteListing=async()=>{
        const {data}=await server.fetch<DeleteListingData,DeleteLisitingVariables>({
            query:DELETE_LISTING,
            variables:{
                id:"5f8bab3ba1b4201b84793698"
            }
        })
        console.log(data);

    }
    return (
    <div>
        <h2>{title}</h2>
        <button onClick={fetchListing}>Query Listing</button>
        <button onClick={deleteListing}>Delete Listing</button>

    </div>)

}

