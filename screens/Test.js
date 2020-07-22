/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component  } from "react";
import { TextInput, Button } from 'react-native'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import io from 'socket.io-client';

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

const showNotification = (titles,messages) => {
    PushNotification.localNotification({
      title: titles,
      message: messages,
    });
  };


class Test extends Component {


constructor(props){
    super(props);
    global.socket = io('http://94.237.97.16:9500');
    global.payments = [];
    this.state = {
            veriler: [],
            BildirimIzni: "w",
            BildirimClass: "",
            response: [],
            imageIndex: 0,
            isImageViewVisible: false,
            resimler: [],
            resimleryeni: [],
            isModalOpened: false,  //Controls if modal is opened or closed
            currentImageIndex: 0,   //Controls initial photo to show for modal 
          
        };
    
  }

  handlerFunction(){

    var yazilan = this.state.BildirimClass;
    console.log(this.state.BildirimClass);
    global.socket.emit('send-message', {
        yazilan
     });

  }


  componentDidMount(){ 
    var that = this;
    this.setState({BildirimIzni: "qq"});
   
   
    socket.on('messages',function(data){
      if(data.yazilan != ""){
         that.setState({BildirimIzni: data.yazilan});
         var joined = that.state.response.concat(data.yazilan);
         that.setState({response: joined});
         showNotification("chat",data.yazilan);
         global.payments.push(data.yazilan);
       }
    });

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
              onPress={() =>this.handlerFunction()} 
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


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  chatbody: {
    backgroundColor: '#eee',
    padding: 30,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 30,
  },
  body: {
    backgroundColor: Colors.white,
  },
  mesajkutusu: {
    backgroundColor: '#08d074',
    color: 'white',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.dark,
    marginBottom: 3,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


