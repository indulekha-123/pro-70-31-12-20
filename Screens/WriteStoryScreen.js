import React from 'react';
import { StyleSheet, Text, View,TextInput,Image } from 'react-native';

export default class WriteStoryScreen extends React.Component{
     render (){
    return(
    <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>
       Story Hub
    </Text>


<View styles={styles.container}>
<Text> 

   Story Title 
</Text>

</View>


<View styles={styles.text}>
<Text> 

   Author 
</Text>

</View>

<View styles={styles.textbox}>
<Text> 

 Write your story here
</Text>



<TouchableOpacity 
       onPress={this.nextScreen}>
        <Text style = {styles.button}>Submit</Text>
        </TouchableOpacity>

</View>

     </View>


    
 )
    
    
    
        }
    }
    

   
    const styles=StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        
        },
    text:{
            fontSize:50,
            textDecorationLine:'underline',
        
        },
        textbox:{
            backgroundColor:'#2196f3',
            padding:10,
            margin:10,
            marginBottom:30
        },
        button: {
            width:160,
            height: 60,
            backgroundColor: 'red',
            alignSelf: 'center',
            marginTop: 120,
             textAlign: 'center',
            borderRadius: 10,
          color:'white',
            fontWeight : 'bold',
              fontSize:36
          },
         
       
        })