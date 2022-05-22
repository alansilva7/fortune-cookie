import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      phraseText: '',
      img: require('./src/biscoito.png'),
    }

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this)

    this.phrases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]


  }

quebrarBiscoito() {
  let showNumber = Math.floor(Math.random() * this.phrases.length)

  this.setState({
    phraseText: '"' + this.phrases[showNumber] + '"',
    img: require('./src/biscoitoAberto.png')  
  })

}

render() {
  return(
    <View style={styles.container}>
      <Image
        source={this.state.img}
        style={styles.img}
      />

      <Text style={styles.phraseText}>{this.state.phraseText}</Text>

      <TouchableOpacity style={styles.button} onPress={this.quebrarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>

    )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 250,
    height: 250,
  },

  phraseText: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  },
})

export default App