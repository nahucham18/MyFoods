'use client'
import { useEffect, useState } from "react"
import CardFood from "./CardFood"
import axios from "axios"


export default function ContainerFoods () {

    const [comidas, setComidas] = useState([])


    const getComidas = async () =>{
        const response = await axios('http://localhost:3000/comidas.json')
        console.log(response)
        setComidas(response.data)
        console.log(response.data.herramientas)
    }

    useEffect(()=>{
        getComidas()
    },[])

    return (
        <div className="w-[100%] mx-[auto] p-[3rem] flex flex-col gap-y-[1rem] bg-violet-400">
            {
                comidas?.map((food,index)=>{
                    return(
                        <CardFood 
                        key={index}
                        titulo={food.titulo}
                        descripcion={food.descripcion}
                        ingredientes={food.ingredientes || []}
                        herramientas={food.herramientas || []}
                        img={food.img}
                        />
                    )
                })
            }
        </div>
    )
}