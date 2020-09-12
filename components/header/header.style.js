import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header:{
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom:20,
        borderBottomColor:'#076fc8',
        borderBottomWidth:1
    },
    left:{
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center',
    },
    links:{
        justifyContent: 'space-around',
        flexDirection:'row'
    },
    link:{
        fontSize:18,
        marginLeft:15
    },
    right:{

    },
    image:{
        width:50,
        height:50,
        borderRadius:30,
    }
})