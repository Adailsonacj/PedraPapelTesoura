
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native'

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
                resultado = 'Máquina ganhou!'
            }
            if (pc == 'Tesoura') {
                resultado = 'Usuário ganhou!'
            }
        }
        if (escolha == 'Papel') {
            if (pc == 'Pedra') {
                resultado = 'Usuário ganhou!'
            }
            if (pc == 'Papel') {
                resultado = 'EMPATE'
            }
            if (pc == 'Tesoura') {
                resultado = 'Máquina ganhou!'
            }
        }
        if (escolha == 'Tesoura') {
            if (pc == 'Pedra') {
                resultado = 'Máquina ganhou!'
            }
            if (pc == 'Papel') {
                resultado = 'Usuário ganhou!'
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
                        <Button title='Pedra' onPress={() => { this.jokenpo('Pedra') }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title='Papel' onPress={() => { this.jokenpo('Papel') }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title='Tesoura' onPress={() => { this.jokenpo('Tesoura') }} />
                    </View>
                </View >
                <View style={styles.rodape}>
                    <Text>Escolha do Computador: {this.state.escolhaComputador}</Text>
                    <Text>Escolha do Usuário: {this.state.escolhaUsuario}</Text>
                    <Text style={styles.showResultado}>{this.state.resultado}</Text>
                </View>
            </View>
        )
    }
}
class Topo extends Component {
    render() {
        return (
            <View alignItems='center'>
                <Image source={require('./imgs/jokenpo.png')} />
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
    showResultado:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red'
    },
    rodape: {
        alignItems: 'center',
        marginTop: 10
    },
})
AppRegistry.registerComponent('PedraPapelTesoura', () => app3);
