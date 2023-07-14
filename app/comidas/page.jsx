import ContainerFoods from "@/components/Comidas/ContainerFoods";
import FilterBar from "@/components/Comidas/FilterBar";

export default function ComidasPage ( ){
    return  (
        <main className=" flex pt-[10vh]  min-h-[100vh] bg-green-400 w-[80%] mx-[auto]">
            <section className="w-[20%]">
                <FilterBar/>
            </section>

            <section className="w-[80%] bg-blue-400">
                <ContainerFoods/>
            </section>
        </main>
    )
}