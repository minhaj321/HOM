import React, { useEffect,useCallback,useState,useRef } from 'react'
import { Pressable,ScrollView,StyleSheet, View,Text, TextInput,Image, Alert } from 'react-native'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { CoatArray ,ShirtArray, womenCoatArray,mensherwani,menprincecoat, menWaistCoat, womenShirt, womenWaist, menPant, womenPant} from '../components/DataArrays';
import { useSelector,useDispatch } from 'react-redux';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import { delItem ,setReset} from '../Store/action';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import {menCoatBase,menPantBase,menPrinceCoatBase,menWaistCoatBase,mensherwaniBase,womenCoatBase,
womenPantBase,womenShirtBase,womenWaistBase,ShirtArrayBase} from './../components/baseImages';

const OutputPage = ({navigation}) => {

    var reduxData = useSelector(state=>state.result)
    var [fetchedData,setFetchedData] = useState(undefined);
    var [pdfName,setPdfName] = useState('')
    var [showDel,setShowDel] = useState(-1)
    var [disp,setDisp] = useState('');
    var dispatch = useDispatch()
          
      const calling = async()=>{
        disp='<div style={{display:"flex",flexDirection:"column",alignItems:"center"}} >'
        fetchedData.map((v,i)=>{
            // console.log(v.data[0])
            if(v.title=='menprincecoat'){
                disp = disp+`<img height='25%' width='40%' style="margin-left:30%;margin-top:5%" src='${menPrinceCoatBase.step1[v.data[0]]}' alt="www" /><br/>`
            }else if(v.title=='mensherwani'){
                disp = disp+`<img height='25%' width='40%' style="margin-left:30%;margin-top:5%" src='${mensherwaniBase.step1[v.data[0]]}' alt="www" /><br/>`
            }else if(v.title=='menWais'){
                disp = disp+`<img height='25%' width='40%' style="margin-left:30%;margin-top:5%" src='${menWaistCoatBase.step1[v.data[0]]}' alt="www" /><br/>`
            }else if(v.title=='womenWais'){
                disp = disp+`<img  height='30%' width='40%' style="margin-left:30%;margin-top:5%" src='${womenWaistBase.step1[v.data[0]]}' alt="www" /><br/>`
            }else if(v.title=='womenShirt'){
                disp = disp+`<img  height='25%' width='44%' style="margin-left:28%;margin-top:5%" src='${womenShirtBase.step1[v.data[0]]}' alt="www" /><br/>`
            }else if(v.title=='menPant'){
                disp = disp+`<img height='30%' width='40%' style="margin-left:30%;margin-top:5%" src='${menPantBase.step1[v.data[0]]}' alt="www" /><br/>`
            }else if(v.title=='womanCoat'){
                disp = disp+`<img  height='30%' width='40%' style="margin-left:30%;margin-top:5%" src='${womenCoatBase.step1[v.data[0]]}' alt="www" /><br/>`
            }else if(v.title=='womenPant'){
                disp = disp+`<img  height='30%' width='40%' style="margin-left:30%;margin-top:5%" src='${womenPantBase.step1[v.data[0]]}' alt="www" /><br/>`
            }else if(v.title=='coat'){
                disp = disp+`<div style='display: flex;flex-direction: row;justify-content: space-between;'>
                <img height="250" width="150" src="${menCoatBase.step1[v.data[0]]}" alt="">
                <img height="250" width="150" src="${menCoatBase.step2[v.data[1]]}" alt="">
                <img height="250" width="150" src="${menCoatBase.step3[v.data[2]]}" alt=""></div>
        <div style='display: flex;flex-direction: row;justify-content: space-between;margin-top: 20px;'>
        <img height="250" width="150" src="${menCoatBase.step4[v.data[3]]}" alt="">
        <img height="250" width="150" src="${menCoatBase.step5[v.data[4]]}" alt="">
        <img height="250" width="150" src="${menCoatBase.step6[v.data[5]]}" alt=""></div>`    
    }else if(v.title=='shirt' && v.data[1]>0){
        disp = disp+`<div style='display: flex;flex-direction: row;justify-content: space-between;'>
        <img height="250" width="150" src="${ShirtArrayBase.step1[v.data[0]]}" alt="">
        <img height="250" width="150" src="${ShirtArrayBase.step2[v.data[1]]}" alt="">
        <img height="250" width="150" src="${ShirtArrayBase.step3[v.data[2]]}" alt=""></div>
        <div style='display: flex;flex-direction: row;justify-content: space-between;margin-top: 20px;'>
        <img height="250" width="150" src="${ShirtArrayBase.step4[v.data[3]]}" alt="">
        <img height="250" width="150" src="${ShirtArrayBase.step5[v.data[4]]}" alt="">
        <img height="250" width="150" src="${ShirtArrayBase.step6[v.data[5]]}" alt=""></div>
        <div style='display: flex;flex-direction: row;justify-content: space-between;margin-top: 20px;'>
        <img height="150" width="150" src="${ShirtArrayBase.step7[v.data[6]]}" alt="">
        <img height="150" width="150" src="${ShirtArrayBase.step8[v.data[7]]}" alt="">
        <img height="150" width="150" src="${ShirtArrayBase.step9[v.data[8]]}" alt=""></div>`
    }else if(v.title=='shirt' && v.data[1]<=0){
        disp = disp+`<div style='display: flex;flex-direction: row;justify-content: space-between;'>
        <img height="250" width="150" src="${ShirtArrayBase.step1[v.data[0]]}" alt="">
        <img height="250" width="150" src="${ShirtArrayBase.step2[v.data[1]]}" alt="">
        <img height="250" width="150" src="${ShirtArrayBase.step3[v.data[2]]}" alt=""></div>
        <div style='display: flex;flex-direction: row;justify-content: space-between;margin-top: 20px;'>
        <img height="250" width="150" src="${ShirtArrayBase.step4[v.data[3]]}" alt="">
        <img height="250" width="150" src="${ShirtArrayBase.step5[v.data[4]]}" alt="">
        <img height="250" width="150" src="${ShirtArrayBase.step6[v.data[5]]}" alt=""></div>
        <div style='display: flex;flex-direction: row;justify-content: space-between;margin-top: 20px;'>
        <img height="150" width="150" src="${ShirtArrayBase.step7[v.data[6]]}" alt="">
        <img height="150" width="150" src="${ShirtArrayBase.step8[v.data[7]]}" alt=""></div>`
    }

})        
disp=disp+'</div>'

            // html: `<img  height=${200} width=${200} src='' alt="www" />`,
            const results = await RNHTMLtoPDF.convert({
            html: disp,
            fileName: 'test',
            base64: true,
          })
          await RNPrint.print({ filePath: results.filePath })
    }

    useEffect(()=>{
        // calling()
        setTimeout(()=>{
            setFetchedData(reduxData)
            console.log(fetchedData)
        },2000)
        setTimeout(()=>{
            setFetchedData(reduxData)
            console.log(fetchedData)
        },3000)

    },[reduxData])

        const handleNext=async()=>{
            calling()
        }

    const handleBack=()=>{
        dispatch(setReset())
        navigation.navigate('categories')
    }

    return (
        <ScrollView style={styles.outPutMain}
        showsVerticalScrollIndicator={false}
        > 
    <View    style={styles.outputIconMain}>
        <Image source={require('./../assets/logo/logo11.png')} style={{width:wp(17),height:wp(17)}} />
        </View>
        <Text style={{fontSize:wp(4),fontFamily:'Megante-Personal-Use'}}>Client Name</Text>
        <TextInput 
        value={pdfName}
        onChangeText={txt=>setPdfName(txt)}
        style={styles.input}
        />
<Text style={styles.detailsTxt}>Order Details</Text>

{(fetchedData) &&
    fetchedData.map((v,i)=>{
    return(
        <View >
            <Pressable
            onPress={()=>setShowDel(i)}
            >
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={styles.countDiv}>
    <Text style={styles.countTxt}>{i+1}</Text>
</View>
{
    i==showDel &&    
<View style={styles.cancelDiv}>
    <Pressable onPress={e=>{
        dispatch(delItem('remove_item',i))
        e.preventDefault();
    }}>
    <AntDesignIcons name='close' size={wp(4)} />
    </Pressable>
</View>
}
</View>
{/* step one image */}
<View style={styles.outputCoatMain}>
    {v.title=='coat' ? CoatArray.step1.images[v.data[0]] : v.title=='womanCoat' ? womenCoatArray.step1.images[v.data[0]] : 
    v.title=='menprincecoat' ?
    menprincecoat.step1.images[v.data[0]]
    : 
    v.title=='mensherwani' ?
    mensherwani.step1.images[v.data[0]]
    : 
    v.title=='menWais' ?
    menWaistCoat.step1.images[v.data[0]]
    : 
    v.title=='womenShirt' ?
    womenShirt.step1.images[v.data[0]]
    : 
    v.title=='womenWais' ?
    womenWaist.step1.images[v.data[0]]
    :
    v.title=='menPant' ?
    menPant.step1.images[v.data[0]]
    :
    v.title=='womenPant' ?
    womenPant.step1.images[v.data[0]]
    :
    ShirtArray.step1.images[v.data[0]]}
</View>

{/* step two three four div */}
{
    !(v.title=='womanCoat' || v.title=='menprincecoat' || v.title=='mensherwani' 
    || v.title=='menWais' || v.title=='womenShirt' || v.title=='womenWais' || v.title=='menPant' || v.title=='womenPant') &&
<View style={styles.outputCatFirstMain}>

{/* step two image */}
<View style={styles.catOneMain}>
    <View style={styles.subCatOutput}>
        {v.title=='coat' ? 
                 CoatArray?.step2?.images[v.data[1]]
                 :
                 ShirtArray?.step2?.images[v.data[1]]
                 }
    </View>
    <Text style={styles.outputTxt}>Notch Lapels</Text>
</View>

{/* step three image */}
<View style={styles.catSecondMain}>
    <View style={styles.subCatOutput}>
    {v.title=='coat'  ? CoatArray?.step3?.images[v.data[2]] : ShirtArray?.step3?.images[v.data[2]]}
    </View>
    <Text style={styles.outputTxt}>Suit Jacket Pocket Types</Text>
    <Text style={styles.outputTxt}>Patch Pocket</Text>
</View>

{/* step four image */}
<View style={styles.catThreeMain}>
    <View style={styles.subCatOutput}>
    {v.title=='coat' ? 
    CoatArray?.step4?.images[v.data[3]]
    :
    ShirtArray?.step4?.images[v.data[3]]    
}

    </View>
    <Text style={styles.outputTxt}>Suit Jacket Vents</Text>
    <Text style={styles.outputTxt}>No Vent</Text>
</View>

</View>
}

{/* step five six seven div */}
{
    v.title=='shirt' &&
<View style={{...styles.outputCatFirstMain,marginTop:hp(4)}}>

{/* step two image */}
<View style={styles.catOneMain}>
    <View style={styles.subCatOutput}>
{
    ShirtArray?.step5?.images[v.data[4]]
}
    </View>
    <Text style={styles.outputTxt}>Notch Lapels</Text>
</View>

{/* step three image */}
<View style={styles.catSecondMain}>
    <View style={styles.subCatOutput}>
{
    ShirtArray?.step6?.images[v.data[5]]
}
    </View>
    <Text style={styles.outputTxt}>Suit Jacket Pocket Types</Text>
    <Text style={styles.outputTxt}>Patch Pocket</Text>
</View>

{/* step four image */}
<View style={styles.catThreeMain}>
    <View style={styles.subCatOutput}>
{
    ShirtArray?.step7?.images[v.data[6]]
}
    </View>
    <Text style={styles.outputTxt}>Suit Jacket Vents</Text>
    <Text style={styles.outputTxt}>No Vent</Text>
</View>

</View>
    
}

{/* step five six / eight nine div */}
{
(!(v.title=='womanCoat' || v.title=='menprincecoat' || v.title=='mensherwani'
|| v.title=='menWais' || v.title=='womenShirt' || v.title=='womenWais' || v.title=='menPant' || v.title=='womenPant')
&&
(v.title=='coat' || v.data[1]>0) ) &&
<View style={{...styles.outputCatFirstMain,marginTop:hp(4)}}>

{/* step five image */}
<View style={styles.catOneMain}>
    <View style={styles.subCatOutput}>
    {v.title=='coat' ? 
                 CoatArray?.step5?.images[v.data[4]]
                 :
                 ShirtArray?.step8?.images[v.data[7]]
                }
    </View>
    <Text style={styles.outputTxt}>Suit Jacket Sleeve</Text>
    <Text style={styles.outputTxt}>Buttons</Text>
    <Text style={styles.outputTxt}>One Button</Text>

</View>

{/* step six image */}
<View style={styles.catSecondMain}>
    <View style={styles.subCatOutput}>
    {
(v.title=='coat')
    ?
    CoatArray?.step6?.images[v.data[5]]
        :
    ShirtArray?.step9?.images[v.data[8]]
    }
    </View>
    <Text style={styles.outputTxt}>Sleeve Button</Text>
    <Text style={styles.outputTxt}>Placement Styles</Text>
    <Text style={styles.outputTxt}>Spaced</Text>
</View>

</View>
}

{
    (v.title=='shirt' && v.data[1]<=0) &&
    <View style={{...styles.outputCatFirstMain,marginTop:hp(4)}}>

{/* step five image */}
<View style={styles.catOneMain}>
    <View style={styles.subCatOutput}>
    { 
                 ShirtArray?.step8?.images[v.data[7]]
                }
    </View>
    <Text style={styles.outputTxt}>Suit Jacket Sleeve</Text>
    <Text style={styles.outputTxt}>Buttons</Text>
    <Text style={styles.outputTxt}>One Button</Text>

    </View>
</View>

}

<Image source={require('./../assets/lineshape.png')} style={styles.line} />
</Pressable>
        </View>
    )
}
)
    
}



<View style={styles.detailsBtns}>
              <View style={styles.backBtn}>
                <Pressable style={styles.prevPres} onPress={()=>handleBack()}>
                  <Text style={styles.backTxt}>New Order</Text>
                </Pressable>
              </View>

              <View style={styles.nextBtn}>
              <Pressable style={styles.nextPres} onPress={()=>handleNext()}>
                  <Text style={styles.nextTxt}>Print</Text>
                </Pressable>
              </View>
            </View>

    </ScrollView>
    )
}

{/* </ViewShot> */}
export default OutputPage

const styles = StyleSheet.create({
    outPutMain:{
        width:wp(100),
        paddingLeft:wp(3),
        paddingRight:wp(3),
        backgroundColor:'#fff'
    },

    outputIconMain:{
        marginTop:hp(5),
        width:'100%',
        marginBottom:hp(4),
        alignItems:'center'
    },
    input:{
        backgroundColor:'#333333',
        width:'100%',
        marginTop:hp(2),
        paddingLeft:'3%',
        color:'#fff',
        fontFamily:'Megante-Personal-Use',
        height:hp(6)
    },
    outputCoatMain:{
        marginTop:hp(-6),
        width:'32%',
        marginLeft:'34%',
        height:hp(30),
        alignItems:'center'
    },
    detailsTxt:{
        textAlign:'center',
        fontSize:wp(5),
        marginTop:hp(6),
        fontFamily:'Megante-Personal-Use'
    },
    outputCatFirstMain:{
        flexDirection:'row',
        marginTop:hp(-2)
    },
    catOneMain:{
        width:wp(23),
    },
    catThreeMain:{
        width:wp(23),
    },
    catSecondMain:{
        width:wp(37),
        marginLeft:wp(4),
        marginRight:wp(4),
        alignItems:'center'
    }, 
    subCatOutput:{
        width:wp(21),
        marginLeft:wp(3),
        height:wp(33),
        // borderWidth:wp(0.5),
        // borderColor:'black',
        // borderStyle:'dotted',
        justifyContent:'center',
        alignItems:'center'
    },
    outputTxt:{
        textAlign:'center',
        fontSize:wp(3.5),
        color:'#333333',
        marginTop:hp(1),
        fontFamily:'Megante-Personal-Use'
    },
    line:{
      // width:wp(30),
      resizeMode:'contain',
    //   marginLeft:wp(0.5),
      marginTop:hp(4),
      width:wp(90),
      marginLeft:wp(2),
      marginBottom:hp(3)
    },
    countDiv:{
        backgroundColor:'#333333',
        width:wp(10),
        height:wp(10),
        borderRadius:wp(50),
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp(3)
    },
    countTxt:{
        color:'#fff',
        fontFamily:'Megante-Personal-Use'
    },
    detailsBtns:{
        width:'100%',
        // marginLeft:wp(5),
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:hp(7)
      },
      backBtn:{
        height:hp(7),
        width:'45%',
        borderRadius:100,
        borderColor:'#333333',
        borderWidth:wp(0.5),
        backgroundColor:'#fff',
        elevation:2,
        marginBottom:hp(5)
      },
      nextBtn:{
        height:hp(7),
        width:'45%',
        borderRadius:100,
        backgroundColor:'#333333',
        borderColor:'#333333',
        borderWidth:wp(0.5),
        elevation:2,
        marginBottom:hp(5)
      },
      prevPres:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
      },
      nextPres:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'100%',
      },
      nextTxt:{
        color:"#fff",
            fontSize:wp(5),
            fontWeight:'600',
        fontFamily:'Megante-Personal-Use'
      },
      backTxt:{
            fontSize:wp(5),
            fontWeight:'600',
        fontFamily:'Megante-Personal-Use'
      },
      cancelTxt:{
        color:'#333333',
      },
      cancelDiv:{
        backgroundColor:'#fff',
        borderColor:'#333333',
        borderWidth:1,
        width:wp(10),
        height:wp(10),
        borderRadius:wp(50),
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp(3)
      }
})