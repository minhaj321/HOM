import React from 'react'
import {View,Text,TextInput,Button,ImageBackground,StyleSheet,Image,ScrollView, Pressable} from 'react-native';
import HeaderBgImg from './../assets/headershape.png'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MeasurementsDisplayComp from './../components/MeasurementsDisplayComp.js';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';


const MeasurementDisplayPage = ({navigation,route}) => {

  var {sended} = route.params;
  var [disp,setDisp] = React.useState('');

    const handleNext = async()=>{
        try{
            disp='<div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >'
            sended.map((v,i)=>{
                disp = disp+`
                <p style="font-size: 26px;font-weight: 600;text-align: center;">${v.title}</p>
<div style="margin-top: 15px;display: flex;flex-direction: row;justify-content: space-between;width: 100%;">
<span style="font-size:20px;">Length : ${v.data.length}</span>
<span style="font-size:20px;">${v.title=='Pant' ? ('Fly :'+v.data.fly) : ('Chest :'+v.data.chest)}</span>
<span style="font-size:20px;">Waist : ${v.data.waist}</span>
</div>
<div style="margin-top: 15px;display: flex;flex-direction: row;justify-content: space-between;width: 100%;">
    <span style="font-size:20px;">${v.title!='Pant' ? ('Shoulder :'+ v.data.shoulder) : ('Balance :'+ v.data.balance)}</span>
    <span style="font-size:20px;">${(v.title=='Coat' || v.title=='Sherwani' || v.title=='Jawar Coat' || v.title=='Waist Coat') ? 
    ('Abdomen :'+ v.data.abdomen) :  v.title!='Pant' ? ('Collar :'+ v.data.collar) : ('Bottom :'+ v.data.bottom)}</span>
    <span style="font-size:20px;">${v.title=='Waist Coat' ? '' : ('Hip :'+ v.data.hip)}</span>
    </div>
<div style="margin-top: 15px;display: flex;flex-direction: row;justify-content: space-between;width: 100%;">
<span style="font-size:20px;">${(v.title=='Waist Coat' || v.title=='Pant' || v.title=='Jawar Coat') ?
 '' : ('Sleeve :'+ v.data.sleeves)}</span>
<span style="font-size:20px;">${v.title=='Shalwar Kamees' ? ('Bottom :'+ v.data.bottom) : 
(v.title=='Coat' || v.title=='Sherwani') ? ('CrossBack :'+ v.data.crossback) : ''}</span>
<span style="font-size:20px;">${v.title=='Shalwar Kamees' ? ('length (kamees) :'+ v.data.length2) : 
(v.title=='Coat' || v.title=='Sherwani') ? ('HalfBack :'+ v.data.halfback) : ''}</span>
</div>
<div style="margin-top: 15px;display: flex;flex-direction: row;justify-content: space-between;width: 100%;">
<span style="font-size:20px;">${v.title=='Shalwar Kamees' ? ('Hip (kamees) :'+ v.data.hip2) : 
(v.title=='Sherwani') ? ('Collar :'+ v.data.collar) : ''}</span>
</div>
`
        })
            disp=disp+'</div>'

            const results = await RNHTMLtoPDF.convert({
                html: disp,
                fileName: 'test',
                base64: true,
              })
              await RNPrint.print({ filePath: results.filePath })

        }catch(err){
            // error
            console.log(err.message)
        }
    }

  return (
       <ScrollView style={{backgroundColor:'#fff'}}>
        <ImageBackground source={HeaderBgImg} style={{alignItems:'center',paddingTop:wp(5),width:wp(100),height:hp(20)}} >
        <Image source={require('./../assets/logo/logo11.png')} style={{width:wp(17),height:wp(17)}}  />
        </ImageBackground>
        <View style={styles.mesureHeadMain}>
        <View style={{width:'15%',justifyContent:'center',alignItems:'center'}}>
            <View style={styles.backBtn}>
                <Ionicons  name='arrow-back' 
                onPress={()=>navigation.navigate('MeasurementPage')}
                size={18} />
            </View>
        </View>
        <View style={{width:'70%'}}>
            <Text style={styles.measurements}>MEASUREMENTS</Text>
        </View>
        </View>

        <MeasurementsDisplayComp  data={sended} />

        <View style={styles.buttonComp}>
        <View style={styles.footerButtonDiv}>
            <Pressable style={styles.Pressable}
             onPress={()=>handleNext()}// onPress={handleNavigation}
            >
            <Text style={styles.btntxt}>Print</Text>
            </Pressable>
        </View>
 
        </View>


    </ScrollView>
    )
}

export default MeasurementDisplayPage

const styles = StyleSheet.create({
  measurements:{
    textAlign:'center',
    fontSize:wp(5),
    color:'#2f2f2f',
    fontFamily:'Megante-Personal-Use'

},
mesureHeadMain:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
},
backBtn:{
  height:wp(8),
  width:wp(8),
  backgroundColor:'#fff',
  elevation:5,
  borderRadius:50,
  justifyContent:'center',
  alignItems:'center'
},
Pressable:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:wp(50),
    height:'100%',
    width:'100%'
},
footerButtonDiv:{
    backgroundColor:"#333333",
    borderRadius:50,
    width:wp(42),
    height:hp(6)
    // paddingVertical:hp(2)
},
buttonComp:{
    flexDirection:'row',
    width:wp(94),
    marginLeft:wp(3),
    justifyContent:'center',
    marginTop:hp(10)
},
btntxt:{
  color:'#fff',
  fontFamily:'Megante-Personal-Use',
  fontSize:wp(4)

},
})