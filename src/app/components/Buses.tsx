export const Buses = ({ruta, horario}) =>{
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> Ruta : {ruta} </div>
                <p className="text-gray-700 text-base">Horario : {horario}</p>
            </div>
        </div>    

    )
}