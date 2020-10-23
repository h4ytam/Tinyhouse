interface Body<Tvariables>{
    query:string;
    variables?:Tvariables
}

export const server={
    fetch:async<Tdata=any,Tvariables=any>(body:Body<Tvariables>)=>{
        const res= await fetch("/api",{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(body)
        })
        return res.json() as Promise<{data:Tdata}>
    }
}