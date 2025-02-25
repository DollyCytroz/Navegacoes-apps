import { NavigationContainer } from '@react-navigation/native'
import { createStaticNavigator } from '@react-navigation/stack'

import Home from '../componentes/Home';
import Dica1 from '../componentes/dica1';
import Dica2 from '../componentes/dica2';

const Stack = createStaticNavigator();

export default function rotasBotao() {
    return(

<NavigationContainer>

    <Stack.NavigationContainer>
        <Stack.screen name = "Home" component={Home}/>
        <Stack.screen name = "Dica1" component={Dica1}/>
        <Stack.screen name = "Dica2" component={Dica2}/>
    </Stack.NavigationContainer>
    
</NavigationContainer>

    );
}