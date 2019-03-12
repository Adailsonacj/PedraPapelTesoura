
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native'
import Topo from './src/components/Topo'
import Escolhas from './src/components/Escolhas'

class app3 extends Component {

    constructor(props) {
        super(props)
        this.state = { escolhaUsuario: '', escolhaComputador: '' }
    }

    jokenpo(escolha) {
        var random = Math.floor(Math.random() * 3)
        var pc = ''

        if (random === 0)
            pc = 'Pedra'
        if (random === 1)
            pc = 'Papel'
        if (random === 2)
            pc = 'Tesoura'

        var resultado = ''
        if (escolha == 'Pedra') {
            if (pc == 'Pedra') {
                resultado = 'EMPATE'
            }
            if (pc == 'Papel') {
                resultado = 'VOCÊ PERDEU!'
            }
            if (pc == 'Tesoura') {
                resultado = 'VOCÊ GANHOU!!'
            }
        }
        if (escolha == 'Papel') {
            if (pc == 'Pedra') {
                resultado = 'VOCÊ GANHOU!!'
            }
            if (pc == 'Papel') {
                resultado = 'EMPATE'
            }
            if (pc == 'Tesoura') {
                resultado = 'VOCÊ PERDEU!'
            }
        }
        if (escolha == 'Tesoura') {
            if (pc == 'Pedra') {
                resultado = 'VOCÊ PERDEU!'
            }
            if (pc == 'Papel') {
                resultado = 'VOCÊ GANHOU!!'
            }
            if (pc == 'Tesoura') {
                resultado = 'EMPATE'
            }
        }

        this.setState({ escolhaUsuario: escolha, escolhaComputador: pc, resultado: resultado })
        this.setState({ escolhaUsuario: escolha, escolhaComputador: pc, resultado: resultado })
        this.setState({ escolhaUsuario: escolha, escolhaComputador: pc, resultado: resultado })
    }

    render() {
        return (
            <View>
                <Topo></Topo>
                <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                        <Button color='#28b4e5ff' title='Pedra' onPress={() => { this.jokenpo('Pedra') }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button color='#28b4e5ff' title='Papel' onPress={() => { this.jokenpo('Papel') }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button color='#28b4e5ff' title='Tesoura' onPress={() => { this.jokenpo('Tesoura') }} />
                    </View>
                </View >
                <View style={styles.rodape}>
                    <Escolhas escolha={this.state.escolhaComputador} jogador='Computador'></Escolhas>
                    <Escolhas escolha={this.state.escolhaUsuario} jogador='Você'></Escolhas>
                    <Text style={styles.showResultado}>{this.state.resultado}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    showResultado: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 30
    },
    rodape: {
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

AppRegistry.registerComponent('PedraPapelTesoura', () => app3);
