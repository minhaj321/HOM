import React, { useEffect,useState } from 'react'
import { Pressable,ScrollView,StyleSheet, View,Text, TextInput,Image, Alert } from 'react-native'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import HOMIcon from './../assets/headerlogo.svg';
import { CoatArray ,ShirtArray, womenCoatArray} from '../components/DataArrays';
import CatIcon from './../assets/Group45.png'
import { useSelector,useDispatch } from 'react-redux';
import { setResult } from '../Store/action';

const OutputPage = ({navigation}) => {

    var dispatch = useDispatch();
    var reduxData = useSelector(state=>state)
    var [fetchedData,setFetchedData] = useState(undefined);
    var [counter,setCounter] = useState(0)
    
    useEffect(()=>{
        setTimeout(()=>{
            setCounter(1)
            setFetchedData(reduxData)
            console.log('ues  1')
        },2000)
        setTimeout(()=>{
            setFetchedData(reduxData)
            setCounter(0)
            console.log('ues')
        },4000)

    },[])
    const handleNext=()=>{
        console.log("done")
        Alert.alert('Printed')
    }

    const handleBack=()=>{
        // dispatch(setResult('result',{title:'coat',data:reduxData.men.coat}))
        navigation.navigate('categories')
    }

return (
<ScrollView style={styles.outPutMain}
showsVerticalScrollIndicator={false}
>
        <View style={styles.outputIconMain}>
        <Image source={require('./../assets/logo/logo11.png')} style={{width:wp(17),height:wp(17)}} />
        </View>
        <Text style={{fontSize:wp(4),fontFamily:'Megante-Personal-Use'}}>Client Name</Text>
        <TextInput 
        style={styles.input}
        />
<Text style={styles.detailsTxt}>Order Details</Text>

{fetchedData?.result &&
    fetchedData.result.map((v,i)=>{
        console.log(v)
    return(
        <View key={i}>

<View style={styles.countDiv}>
    <Text style={styles.countTxt}>{i+1}</Text>
</View>

{/* step one image */}
<View style={styles.outputCoatMain}>
    {v.title=='coat' ? CoatArray.step1.images[v.data[0]] : v.title=='womanCoat' ? womenCoatArray.step1.images[v.data[0]] : 
    ShirtArray.step1.images[v.data[0]]}
</View>

{/* step two three four div */}
{
    !(v.title=='womanCoat') &&
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
!(v.title=='womanCoat') &&
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
    {v.title=='coat' ? 
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

<Image source={require('./../assets/lineshape.png')} style={styles.line} />

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

export default OutputPage

const styles = StyleSheet.create({
    outPutMain:{
        width:wp(94),
        marginLeft:wp(3),
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
        width:wp(45),
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
})