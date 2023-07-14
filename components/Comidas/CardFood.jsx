export default function CardFood ({titulo, descripcion, img, ingredientes, herramientas}) {
    return  (
        <div className="flex text-[black] border-[1px] border-[black] w-[100%] bg-red-400 h-[200px] justify-between">
            <div className="w-[35%]">{img}</div>
           <div className="h-[50%] w-[60%]">
             <div>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
             </div>
             <div className="flex gap-x-[2rem] justify-between w-[70%] mx-[auto] bg-yellow-400">
                <span>Porciones:</span>
                <span>Tiempo:</span>
             </div>

           </div>

        </div>
    )
}