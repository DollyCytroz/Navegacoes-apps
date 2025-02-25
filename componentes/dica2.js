import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native'

export default function dica2() {
    return (

        <SafeAreaView style={estilo.container}> 
            <View style = {estilo.principal}> 
                <Text style = {estilo.titulo}> Dica 02 </Text>
                <Text style = {estilo.subtitulo}> Conhecimentos da Empresa </Text>
            </View>

            <View> 
                <Text style = {estilo.textoPrincipal}>No mundo da programação, não basta apenas ter habilidades técnicas. Para se destacar no mercado de trabalho, é fundamental compreender também o funcionamento da empresa na qual você está inserido. O "Conhecimento da Empresa" vai além do seu papel como programador; envolve entender os objetivos, a cultura organizacional, os desafios do negócio e as necessidades dos clientes. </Text>

                <View style={estilo.imgDiv}>

            <Image resizeMode= 'contain' style={estilo.img} source={require('../assets/empresa1.jpeg')}/>

            </View>

            </View>


        </SafeAreaView>
    )
}

const estilo = StyleSheet.create ({

    container:{
        flex:1,
    },

    principal: {
        marginTop: 40,
        alignItems: 'center',
        fontSize:25,
        backgroundColor: '#abcd',
        padding: 10,
        marginBottom: 20
    },

    titulo: {
        fontSize:20,
        fontWeight: 'bold'
    },

    subtitulo:{
        fontSize:18
    },

    textoPrincipal: {
        fontSize: 16,
        marginInline: 2,
        textAlign:'justify',
        padding: 46
    },

    img: {
        width: 300,
        height: 230
    },

    imgDiv: {
        alignItems:'center'
    }

});