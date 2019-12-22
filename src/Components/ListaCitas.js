import React from 'react';
import CitaDetail from './CitaDetail';

const ListaCitas = ({citas,eliminarCita}) => {
    const mensaje = Object.keys(citas).length === 0? 'No hay Citas' : 'Administra las citas aqui';
    return (
        <div className="card mt-2 py-5" >
            <div className= "card-body">
    <h2 className="card-title text-center" >{mensaje}</h2>
                <div className="lista-citas">
                    {citas.map(cita =>(
                        <CitaDetail 
                            key={cita.id}  
                            cita={cita}  
                            eliminarCita = {eliminarCita}
                        >

                        </CitaDetail>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaCitas;