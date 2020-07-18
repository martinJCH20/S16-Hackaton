
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from '../Scenes/Login';
import Scene1 from '../Scenes/Scene1';
import Scene2 from '../Scenes/Scene2';

const Stack = createStackNavigator();

const MainStackNavigator = (props) => {
    const forFade = ({ current, closing }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    });
    return (
      <Stack.Navigator
      initialRouteName="Scene1"
      headerMode="none"
  >
    <Stack.Screen name="Scene1" component={Scene1} options={{ cardStyleInterpolator: forFade }}/> 
    <Stack.Screen name="Scene2" component={Scene2} options={{ cardStyleInterpolator: forFade }}/>
  </Stack.Navigator>
    );
  }
  
  export {
      MainStackNavigator
  }