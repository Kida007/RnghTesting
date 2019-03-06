import React from "react";
import { SafeAreaView, Text } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex:1, backgroundColor:'#fff', justifyContent:'center', alignItems:'center'}}>
        <Swipeable>
          <Text>hello mate</Text>
        </Swipeable>
      </SafeAreaView>
    );
  }
}
export default HomeScreen ;