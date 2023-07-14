import Menu from "../Menu/Menu";

export default function NavBar () {
    return (
        <nav className="flex justify-around items-center text-[#E9E5D6] bg-[#464E2E] h-[10vh] py-[1rem] fixed w-[100%]">
            <div className="w-[10%] cursor-pointer hover:text-[#FFFFFF]">Logo</div>
            <div className=" w-[50%] ">
                <Menu/>
            </div>
            <div className="flex justify-center w-[25%] cursor-pointer hover:text-[#FFFFFF]">Usuario</div>
        </nav>
    )
}