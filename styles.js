import { StyleSheet } from 'react-native'


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
    },
    viewJogador: {
        alignItems: 'center',
        marginTop: 30
    },
    txtJogador: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})


module.exports.styles = styles