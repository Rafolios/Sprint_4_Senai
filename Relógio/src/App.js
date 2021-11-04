import React from 'react';
import './App.css';


function DataFormatada(props) {
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date : new Date(),
      pausado : 0
    }
  }

  // Ciclo de vida que ocorre quando Clock é inserido na DOM (ou seja, ciclo de vida do nascimento)
  componentDidMount(){
    this.timerID = setInterval( () => {
      this.thick()
    }, 1000 );

    // Exibe no console o ID de cada relógio
    console.log('Eu sou o relógio ' + this.timerID);
  }

  // Ciclo de vida que ocorre quando Clock é removido da DOM (ou seja, ciclo de vida da morte)
  // Quando isso acontece, a função clearInterval() limpa o relógio criado pela setInterval
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  // Atualiza o state date com a data e hora deste momento, ou seja, quando a função thick() for invocada
  thick(){
    this.setState({
      date : new Date()
    })
  }

  pause(){
    clearInterval(this.timerID);
    this.setState({
      pausado : 1
    })
    return console.log('Relógio '+this.timerID+" foi pausado")
  }

  unpause(){
  this.timerID = setInterval(() => {
    this.thick()
  }, 1000)

  this.setState({
    pausado : 0
  })
  return console.log('Relógio '+this.timerID+" foi retomado")
  }


  // Renderiza na tela o conteúdo do return
  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        {
        this.state.pausado === 1 ?
        <button className="BotRetomar" type="submit" onClick={() => this.unpause()}>Retomar</button>:
        <button className="BotPausar" type="submit"onClick={() => this.pause()}>Pausar</button>
        }
      
      </div>
    )
  }
}

// Componente funcional
function App() {
  return (
    // JSX
    <div className="App">
      <header className="App-header">
        <Clock />

      </header>
    </div>
  );
}

// Declara que o componente App pode ser utilizado fora deste escopo
export default App;