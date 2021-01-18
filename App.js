import React from 'react';
import { Text, View} from 'react-native';


const HelloWorld = () => {
  return (
    <View style = {{
      flex : 2,
      justifyContent: 'center',
      alignItems: 'center'
    }

    }>
      <Text>Hello, World! </Text>
    </View>


  );

}

export default HelloWorld;