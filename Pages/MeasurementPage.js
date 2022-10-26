import React from 'react'
import { useState } from 'react';
import {View,Text,TextInput,Button,ImageBackground,StyleSheet,Image,ScrollView, Pressable} from 'react-native';
import HeaderBgImg from './../assets/headershape.png'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CoatComp from './../components/FromComp/CoatComp.js';
import ShirtComp from './../components/FromComp/ShirtComp.js';
import SherwaniComp from './../components/FromComp/SherwaniComp.js';
import JawarComp from './../components/FromComp/JawarComp.js';
import PantComp from './../components/FromComp/PantComp.js';
import ShalwarComp from './../components/FromComp/ShalwarComp.js';
import WaistComp from './../components/FromComp/WaistComp.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MeasurementPage = ({navigation}) => {

    var [type,setType] = useState('Coat')
    var [checks,setChecks] = useState({
        Coat:0,
        Sherwani:0,
        Pant:0,
        Shalwar:0,
        Shirt:0,
        'Jawar Coat':0,
        'Waist Coat':0,
    })
    var [coat,setCoat] = useState({
        length :0,chest :0,
        abdomen :0,waist :0,
        hip :0,shoulder :0,
        sleeves :0,crossback :0,
        halfback :0,
    })
    var [sher,setSher] = useState({
        length :0,chest :0,
        abdomen :0,waist :0,
        hip :0,shoulder :0,
        sleeves :0,crossback :0,
        halfback :0,collar :0,
    })
    var [shirt,setShirt] = useState({
        length :0,chest :0,
        waist :0,
        hip :0,shoulder :0,
        sleeves :0,collar :0,
    })
    var [shalwar,setShalwar] = useState({
        length:0,chest :0,
        length2:0,hip :0,
        waist :0,bottom :0,
        hip2:0,shoulder :0,
        sleeves :0,collar :0,
    })
    var [jawarCoat,setJawarCoat] = useState({
        length :0,chest :0,
        abdomen :0,waist :0,
        hip :0,shoulder :0,
    })
    var [pant,setPant] = useState({
        length :0,bottom :0,
        balance :0,waist :0,
        hip :0,fly :0,
    })
    var [waist,setWaist] = useState({
        length :0,chest :0,
        abdomen:0,waist :0,
        shoulder:0,
    })

    var [sended,setSended] = useState([])

    var handlerArray = [
        {title:'Coat',fun:()=>{setType('Coat')}},
        {title:'Waist Coat',fun:()=>{setType('Waist Coat')}},
        {title:'Pant',fun:()=>{setType('Pant')}},
        {title:'Jawar Coat',fun:()=>{setType('Jawar Coat')}},
        {title:'Shalwar',fun:()=>{setType('Shalwar')}},
        {title:'Sherwani',fun:()=>{setType('Sherwani')}},
        {title:'Shirt',fun:()=>{setType('Shirt')}},
    ]

    const handleNavigation=()=>{
        sended=[]
        try{
            if(checks.Coat==1){
                sended =[...sended,{title:'Coat',data:coat}]
            }
            if(checks.Pant==1){
                sended =[...sended,{title:'Pant',data:pant}]
            }
            if(checks.Shalwar==1){
                sended =[...sended,{title:'Shalwar Kamees',data:shalwar}]
            console.log('in1')
        }
            if(checks['Sherwani']==1){
                sended =[...sended,{title:'Sherwani',data:sher}]
            console.log('in2')
        }
            if(checks['Jawar Coat']==1){
                sended =[...sended,{title:'Jawar Coat',data:jawarCoat}]
            console.log('in3')
        }
            if(checks['Waist Coat']==1){
                sended =[...sended,{title:'Waist Coat',data:waist}]
            console.log('in4')
        }
            if(checks.Shirt==1){
                sended =[...sended,{title:'Shirt',data:shirt}]
            }
            setSended(sended)
            navigation.navigate('MeasurementDisplayPage',{
                sended
            })

        }catch(err){
            // error of catch
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
                onPress={()=>navigation.navigate('categories')}
                size={18} />
            </View>
        </View>
        <View style={{width:'70%'}}>
            <Text style={styles.measurements}>MEASUREMENTS</Text>
        </View>
        </View>

        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.CatScrollMain}
        >
        {/* <View style={styles.CatScrollMain}> */}
            {
                handlerArray.map((v)=>(
                    <Pressable 
                    onPress={v.fun}
                    style={styles.pressableTags}>
                        <Text style={styles.titleTxt}>{v.title}</Text>
                        {
                            type==v.title &&
                        <View style={{width:'25%',height:5,backgroundColor:'black',borderRadius:50,position:'absolute',bottom:0}}></View>
                        }
                    </Pressable>
                ))
            }
        {/* </View> */}
        </ScrollView>
{
    type=='Coat' &&
        <CoatComp data={coat} setData={setCoat} />
}
{
    type=='Shirt' &&
    <ShirtComp data={shirt} setData={setShirt} />
}
{
    type=='Waist Coat' &&
    <WaistComp data={waist} setData={setWaist} />
}

{
    type=='Sherwani' &&
    <SherwaniComp data={sher} setData={setSher} />
}
{
    type=='Pant' &&
        <PantComp data={pant} setData={setPant} />
}
{
    type=='Shalwar' &&
        <ShalwarComp data={shalwar} setData={setShalwar} />
}
{
    type=='Jawar Coat' &&
        <JawarComp data={jawarCoat} setData={setJawarCoat} />
}
        
        <View style={styles.buttonComp}>

        <View style={styles.footerButtonDiv}>
            <Pressable style={styles.Pressable}
            onPress={handleNavigation}
            >
            <Text style={styles.btntxt}>View Measurements</Text>
            </Pressable>
        </View>
        <View style={styles.footerButtonDiv}>
            <Pressable style={styles.Pressable}
            onPress={()=>{
                checks[type]=1
                setChecks({...checks})
                console.log(checks)
            }
            }
            >
            <Text style={styles.btntxt}>Save</Text>
            </Pressable>
        </View>
        </View>

        </ScrollView>
        )

}

export default MeasurementPage

const styles = StyleSheet.create({
    backBtn:{
        height:wp(8),
        width:wp(8),
        backgroundColor:'#fff',
        elevation:5,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center'
    },
    pressableTags:{
        // width:'25%',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        position:'relative'
        // overflow:'scroll'
    },
    titleTxt:{
        width:wp(25),
        textAlign:'center',
        fontFamily:'Megante-Personal-Use',
        color:'#333333'        
    },
    CatScrollMain:{
        // width:wp(120),
        overflow:'scroll',
        marginLeft:wp(2),
        marginRight:wp(2),
        height:50,
        marginTop:hp(3),
        marginBottom:hp(3),
        backgroundColor:'#fff',
        elevation:20,
        borderRadius:50,
        flexDirection:'row'
    },
    btntxt:{
        color:'#fff',
        fontFamily:'Megante-Personal-Use',
        fontSize:wp(3)

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
        justifyContent:'space-between',
        marginTop:hp(10)
    },
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
    }
})