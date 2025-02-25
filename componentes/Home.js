import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 


export default function Home(props){
    return(
        <SafeAreaView style={estilo.container}> 

            <View style ={estilo.principal}> 
                <Text style ={estilo.titulo}> Mundo do Programador </Text>
                <Text style ={estilo.subtitulo}> Dicas para o Mercado de Trabalho </Text>
            </View>

            <View> 
                <TouchableOpacity style ={estilo.button} onPress> 
                    <Text style ={estilo.textButton}> Dica 1 - Repertorio de Conhecimento sobre o Assunto </Text>
                </TouchableOpacity>

                <TouchableOpacity style ={estilo.button}> 
                    <Text  style ={estilo.textButton}> Dica 2 - Conhecimentos da Empresa </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    );
} 


const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        backgroundColor: '#668dcc',
        justifyContent: 'center'
    },

    titulo: {
        fontSize:30,
    },

    subtitulo: {
        fontSize:15,
    },

    button:{
        margin: 10,
        padding:5,
        backgroundColor:'#add8e6',
        borderRadius:5,
        alignItems: 'center'
    },

    textButton:{
        fontSize:20,

    },

    principal:{
        alignItems: 'center',
        marginBottom: 50,
        borderWidth: 2,
        padding: 10,
        backgroundColor:'#42c0c7',
        }

});