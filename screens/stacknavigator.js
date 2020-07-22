/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component  } from "react";
import { TextInput, Button } from 'react-native'
import {SafeAreaView, StyleSheet,ScrollView,View,Text,StatusBar,Platform,} from 'react-native';


import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screens/HomeScreen'
import Test from '../screens/Test'

const InnerStackNavigator = new StackNavigator ({

  Home:{ screen: Home },
  DetailsPage:{ screen: Test },
})

class App extends React.Component {


constructor(props){
    super(props);
    
  }



  componentDidMount(){ 


  }



render() {
  
  let bildirimiznidurumu =  this.state.BildirimIzni; 

  const lapsList = this.state.response.map((data) => {
    if(data != null){
      return (
        <View><Text style={styles.mesajkutusu}>{data}</Text></View>
      )
    }
  })
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeqScreen} />
      </Stack.Navigator>
      </NavigationContainer>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>asd{this.state.BildirimClass}</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              
              <Text style={styles.sectionTitle}>Mesajınız</Text>
              
              <TextInput placeholder = "Mesajınız" onChangeText={(text) => this.setState({BildirimClass:text})}/>
              
              <Button 
              onPress={() => this.props.navigation.navigate('Home')}
            // onPress={() => navigation.navigate('./screens/Test')}
              title="Mesajı Gönder"
              color="#0000ff"/>

              <Text style={styles.sectionDescription}>
               yukarıdan mesajınızı yazın ve herkes sizi görsün.
              </Text>
            </View>

           <View style={styles.chatbody}>
            {lapsList}
           </View>

          
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

}

export default App;
