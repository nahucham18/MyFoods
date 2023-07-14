import Link from "next/link";

export default function Menu () {
    return (
        <ul className="flex justify-around">
            <li className="cursor-pointer hover:text-[#FFFFFF] border-b-[1px] border-[#11111100] hover:border-[#FFFFFF]">Inicio</li>
            <Link href={'/comidas'} className="cursor-pointer hover:text-[#FFFFFF] border-b-[1px] border-[#11111100] hover:border-[#FFFFFF]">Comidas</Link>
            <li className="cursor-pointer hover:text-[#FFFFFF] border-b-[1px] border-[#11111100] hover:border-[#FFFFFF]">Calendario</li>
            <li className="cursor-pointer hover:text-[#FFFFFF] border-b-[1px] border-[#11111100] hover:border-[#FFFFFF]">Favoritas</li>
        </ul>
    )
}