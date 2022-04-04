import React from 'react';
import styles from '../../styles/index.module.css';

class Record extends React.Component{
    render(){
        return(
            <div className={styles.recordatorio}>
                <h3>Seleccion Anterior: {this.props.seleccionPrevia}</h3>
                <h4>Historial de Selecciones: </h4>
                <ul>{this.props.historial}</ul>
            </div>
        )
    }
}

export default Record;