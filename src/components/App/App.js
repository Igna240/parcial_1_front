import React from "react";
import Options from '../Options/Options.js';
import Record from '../Record/Record.js'
import styles from '../../styles/index.module.css';
import data from '../../DATA/data.json';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      historial: [],
      contador:1,
      seleccionPrevia: '',
    
    }
  }
  
  componentDidUpdate(prevProps, prevState){
      if (prevState.seleccionPrevia !== this.state.seleccionPrevia ){
        this.state.historial.push(this.state.seleccionPrevia)
        console.log(this.state.historial);  
      }
  }

  handleClick = (e)=>{
    if (this.state.contador>4) {
      alert('Fin.')
      return
    } else{
      this.setState({...this.state,contador:this.state.contador+1, seleccionPrevia: e.target.id})
      console.log((this.state.contador)+this.state.seleccionPrevia);
      console.log(data.findIndex((item)=> item.id===(this.state.contador)+this.state.seleccionPrevia));
      
    }
      
  }

  render(){
    return(
      <div className={styles.layout}>
        <h1 className={styles.historia}>{data[data.findIndex((item)=> item.id===(this.state.contador)+this.state.seleccionPrevia)].historia}</h1>
        <Options
        handleClick={this.handleClick}
        opcionA={data[this.state.contador].opciones.a}
        opcionB={data[this.state.contador].opciones.b}/>
        <Record
        seleccionPrevia={this.state.seleccionPrevia.toUpperCase()}
        historial={this.state.historial.map((element, i)=>
          <ul key={i}>{element.toUpperCase()}</ul>
          )}
        />
      </div>
    )
  }
}



export default App;
