import React from "react";

import styles from '../../styles/index.module.css';

class Options extends React.Component{
    render(){
        return(
            <div className={styles.opciones}>
            <div className={styles.opcion}>
            <button id="a" className={styles.botones} onClick={this.props.handleClick}>A</button>
            <h2>{this.props.opcionA}</h2>
            </div>
            <div className={styles.opcion}>
            <button id="b"className={styles.botones} onClick={this.props.handleClick}>B</button>
            <h2>{this.props.opcionB}</h2>
            </div>

            </div>
        )
    }
}

export default Options;

