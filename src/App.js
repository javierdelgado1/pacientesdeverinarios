import './bootstrap.min.css';

import React, { Component } from 'react'
import Header from './Components/Header';
import NuevaCita from './Components/NuevaCita';
import ListaCitas from './Components/ListaCitas'

export default class App extends Component {
    state ={
        citas : []
    }
    crearNuevaCita = datos =>{
        console.log(datos);
        const citas = [...this.state.citas, datos];
        this.setState({citas});
    }
    eliminarCita = id =>{
        const citasActuales = [...this.state.citas];
        const citas = citasActuales.filter(cita => cita.id !== id);
        this.setState({citas});
    }
    componentDidMount(){
        //cuando la aplicacion carga
        const citasLs = localStorage.getItem('citas');
        if(citasLs){
            this.setState({
                citas: JSON.parse(citasLs)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem('citas', JSON.stringify(this.state.citas));
    }
    render() {
        return (
            <div className="container">
                <Header 
                    titulo ="Administrador Pacientes Veterinaria"
                    />
                <div className="row">
                    <div className="col-md-12 mx-auto">
                        <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
                    </div>
                </div>
                <div className = "mt5 col-md-10 mx-auto">
                    <ListaCitas 
                        citas={this.state.citas} 
                        eliminarCita={this.eliminarCita}
                    ></ListaCitas>
                </div>
            </div>
        )
    }
}


