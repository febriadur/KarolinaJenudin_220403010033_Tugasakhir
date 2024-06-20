import React from 'react-native';
import {View,Text,Image,Button} from 'react-native';
export default function (){
  return(
    <View style={{
      flex:1,
      backgroundColor:'red',
      alignItems:'center'
    }}>
    <Text style={{
      textAlign:'center',
      fontSize:15,
      fontWeight:'bold',
      margin:10,
    }}>Selamat Datang Di Warkop Karolin</Text> 
    <Image source={{
      uri:'https://www.bentengpancasila.com/wp-content/uploads/2021/04/coffe-1354786_1920-1536x1024.jpg'}} style={{width:300,height:200,margin:70}}/>
      <Text style={{
      textAlign:'center',
      fontSize:15,
      fontWeight:'bold',
      margin:10}}>Surga dalam Secangkir: Rasakan kenikmatan kopi yang tiada tara, bagaikan surga di setiap tegukan.... </Text>
    </View>
  );
}