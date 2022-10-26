import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MeasurementsDisplayComp = ({data}) => {

    console.log(data)

  return (
    <View>
{
    data.map((v,i)=>(
        <View>
            <Text style={styles.heading}>{v.title}</Text>

<View style={styles.inputHeadMain}>
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>Length</Text>
    <View style={styles.inputField}>
        <Text>{v.data.length}</Text>
</View>
</View>
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>{v.title=='Pant' ? 'Fly' : 'Chest'}</Text>
<View style={styles.inputField}>
        <Text>{v.title=='Pant' ? v.data.fly : v.data.chest}</Text>
</View>
</View>
</View>

<View style={styles.inputHeadMain}>
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>Waist</Text>
    <View style={styles.inputField}>
        <Text>{v.data.waist}</Text>
</View>
</View>
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>{v.title=='Waist Coat' ? 'Abdomen' : 'Hip'}</Text>
<View style={styles.inputField}>
        <Text>{v.title=='Waist Coat' ? v.data.abdomen : v.data.hip}</Text>
</View>
</View>
</View>

<View style={styles.inputHeadMain}>
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>{v.title=='Pant' ? 'Balance' : 'Shuolder'}</Text>
    <View style={styles.inputField}>
        <Text>{v.title=='Pant' ? v.data.balance : v.data.shoulder}</Text>
</View>
</View>
{
 (v.title!='Waist Coat')    &&
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>{(v.title=='Jawar Coat') ? 'Abdomen' : v.title=='Pant' ? 'Bottom' :  'Sleeves'}</Text>
<View style={styles.inputField}>
        <Text>{(v.title=='Jawar Coat') ? v.data.abdomen : v.title=='Pant' ? v.data.bottom :  v.data.sleeves}</Text>
</View>
</View>
}
</View>
{
    (v.title!='Shirt' && v.title!='Jawar Coat' && v.title!='Waist Coat' && v.title!='Pant') &&
<View style={styles.inputHeadMain}>
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>{v.title=='Shalwar' ? 'Length(Kammes)' : 'Abdomen'}</Text>
    <View style={styles.inputField}>
        <Text>{v.title=='Shalwar' ? v.data.length2 : v.data.abdomen}</Text>
</View>
</View>
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>{v.title=='Shalwar' ? 'Hip(Kammes)' : 'CrossBack'}</Text>
<View style={styles.inputField}>
        <Text>{v.title=='Shalwar' ? v.data.hip2 : v.data.crossback}</Text>
</View>
</View>
</View>
}
<View style={styles.inputHeadMain}>
{
    (v.title=='Coat' || v.title=='Sherwani') &&
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>Half Back</Text>
    <View style={styles.inputField}>
        <Text>{v.data.halfback}</Text>
</View>
</View>
}
{
 (v.title=='Sherwani' || v.title=='Shirt' || v.title=='Shalwar') &&
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>Collar</Text>
<View style={styles.inputField}>
        <Text>{v.data.collar}</Text>
</View>
</View>
}
</View>

        </View>
    ))
}
    </View>
    )
}

export default MeasurementsDisplayComp

const styles= StyleSheet.create({
    inputHeadMain:{
        flexDirection:'row',
        width:wp(94),
        marginLeft:wp(3),
        justifyContent:'space-between',
        marginTop:hp(2)
    },
    inputSubMain:{
        flexDirection:'column',
        width:wp(42),
    },
    InputText:{
        fontFamily:'Megante-Personal-Use',
        fontSize:wp(4),
        color:'#333333'

    },
    inputField:{
        borderColor:'#f2f2f2',
        borderWidth:1,
        height:hp(5),
        borderRadius:10,
        justifyContent:'center',
        marginTop:hp(0.5),
        paddingLeft:wp(2)
    },
    heading:{
        fontSize:wp(5),
        marginTop:hp(6),
        fontFamily:'Megante-Personal-Use',
        textAlign:'center'
    },
})