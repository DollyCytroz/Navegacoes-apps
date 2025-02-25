import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

export default function dica1(){
    return(

        <SafeAreaView style={estilo.container}>
            <View style={estilo.principal}>
                <Text style ={estilo.titulo}> Dica 01 </Text>
                <Text style={estilo.subtitulo}> Repertorio e Conhecimento sobre o Assunto </Text>
            </View>

            
            <View>

            <Text style={estilo.textoPrincipal}>No mundo da programação, ter um vasto repertório e um bom conhecimento técnico são essenciais para se destacar no mercado de trabalho. Isso não significa apenas saber escrever códigos ou entender uma linguagem de programação, mas sim ter uma compreensão abrangente das ferramentas, melhores práticas e tendências atuais do setor. </Text>

            <View style={estilo.imgDiv}>

            <Image resizeMode= 'contain' style={estilo.img} source={require('../assets/programa1.webp')}/>

            </View>

            </View>
        </SafeAreaView>

    );
}

const estilo = StyleSheet.create ({

    container:{
        flex:1,
        backgroundColor: '#668dcc'
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