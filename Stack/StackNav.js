import * as React from 'react';
import EntryAnimation from '../Animations/EntryAnimation'
import { createStackNavigator } from '@react-navigation/stack';
import SecondAnimation from '../Animations/SecondAnimation'

const Stack1 = createStackNavigator();

export function Stack() {
  return (

     <Stack1.Navigator>
       <Stack1.Screen name="EntryAnimation" component={EntryAnimation} />
       <Stack1.Screen name="SecondAnimation" component={SecondAnimation} />
     </Stack1.Navigator>

  );
}