import * as React from 'react';
import {StyleSheet,Text,View} from 'react-native';


const Recents=()=> {
    return (
       <View style={styles.container}>
           <Text>This is Recents</Text>
       </View>
    );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default Recents;
