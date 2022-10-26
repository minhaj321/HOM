import React, { useState,useEffect } from 'react'
import { ScrollView,ImageBackground ,Image, Text,View,StyleSheet, Pressable} from 'react-native'
import HeaderBgImg from './../assets/headershape.png'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Whitecircle1 from './../assets/circle/whitecircle1.png'
import Blackcircle1 from './../assets/circle/blackcircle1.png'
import RNFS from 'react-native-fs';
import { useIsFocused } from '@react-navigation/native'
const Categories = ({navigation}) => {

    var [men,setMan] = useState(true)
    var [type,setType] = useState('')
    var isfOCUSED =useIsFocused()


    const handleSelector = (val)=>{

        navigation.navigate('/')
            setType(val)
            // setTimeout(()=>{
            //     setType('')
            //     navigation.navigate('details',{
            //     selectedType : val
            // })
            // },1000)

 
    }

    return (
    <View style={{backgroundColor:'#fff'}}>
        <ImageBackground source={HeaderBgImg} style={{alignItems:'center',paddingTop:wp(5),width:wp(100),height:hp(20)}} >
        <Image source={require('./../assets/logo/logo11.png')} style={{width:wp(17),height:wp(17)}}  />
        </ImageBackground>

        <View style={styles.CatTItles}>
            <View style={styles.menTxt}>
            <Pressable onPress={()=>setMan(true)}>
                <Text style={!men ? styles.CatTxt : {...styles.CatTxt,color:'black'}}>MEN</Text>
                </Pressable>
            </View>
            <View style={styles.womenTxt}>
            <Pressable onPress={()=>setMan(false)}>
                <Text style={men ? styles.CatTxt : {...styles.CatTxt,color:'black'}}>WOMEN</Text>
                </Pressable>
            </View>
        </View>
        <View style={{width:wp(12),position:'absolute',right:0,top:hp(19.5),borderTopLeftRadius:10,borderBottomLeftRadius:10,height:wp(12),backgroundColor:'#fff',elevation:7}}>
            <Pressable style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}
            onPress={()=>navigation.navigate('MeasurementPage')}
            >
            <Image style={{resizeMode:'contain',height:wp(8),width:wp(8)}}  source={require('./../assets/measurementicon.png')} />
            </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.cateMain}>
        {
            men &&
        <View style={styles.subCatMain}>
            <View style={styles.subCatDiv}>
                <View style={styles.CatSubMain}>
                    <Text style={styles.catName}>COAT</Text>
                <ImageBackground source={type=='menCoat' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
                <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('menCoat')}
                >
                    {
                        type=='menCoat' ?
                        <Image source={require('./../assets/CatMan/mencoatwhite.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatMan/mencoatblack.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }
            </Pressable>
                </ImageBackground>
                </View>

                <View style={styles.CatSubMain}>
                    <Text style={styles.catName}>PANT</Text>
                <ImageBackground source={type=='menPant' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
                <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('menPant')}
                >
                    {
                        type=='menPant' ?
                        <Image source={require('./../assets/CatMan/menpantwhite.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatMan/menpantblack.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }

            </Pressable>
                </ImageBackground>
                </View>
            </View>

<View style={styles.subCatDiv}>

<View style={styles.CatSubMain}>
    <Text style={styles.catName}>SHERWANI</Text>

                <ImageBackground source={type=='menSher' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
                <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('menSher')}
                >
                    {
                        type=='menSher' ?
                        <Image source={require('./../assets/CatMan/mensherwaniwhite.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatMan/mensherwani.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }

            </Pressable>
                </ImageBackground>
                </View>

                <View style={styles.CatSubMain}>
                    <Text style={styles.catName}>PRINCE COAT</Text>

                <ImageBackground source={type=='menPrin' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
                <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('menPrin')}
                >
                    {
                        type=='menPrin' ?
                        <Image source={require('./../assets/CatMan/prince-coat-men-white.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatMan/prince-coat-black-333.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }

            </Pressable>
                </ImageBackground>
                </View>

            </View>

            <View style={styles.subCatDiv}>

<View style={styles.CatSubMain}>
    <Text style={styles.catName}>WAIST COAT</Text>
                <ImageBackground source={type=='menWais' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
                <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('menWais')}
                >
                    {
                        type=='menWais' ?
                        <Image source={require('./../assets/CatMan/menwaistcoatwhite.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatMan/menwaistcoatblack.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }
            </Pressable>
                </ImageBackground>
                </View>

                <View style={styles.CatSubMain}>
                    <Text style={styles.catName}>SHIRT</Text>

                <ImageBackground source={type=='menShir' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
                <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('menShir')}
                >
                    {
                        type=='menShir' ?
                        <Image source={require('./../assets/CatMan/menshirtwhite.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatMan/menshirtblack.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }
            </Pressable>
                </ImageBackground>
                </View>
            </View>

        </View>
        }

{
    !men &&
    <View style={styles.subCatMain}>
    <View style={styles.subCatDiv}>
        <View style={styles.CatSubMain}>
            <Text style={styles.catName}>COAT</Text>
        <ImageBackground source={type=='womenCoat' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
            <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('womenCoat')}
                >
                    {
                        type=='womenCoat' ?
                        <Image source={require('./../assets/CatWomen/womencoatwhite.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatWomen/womencoatblack.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }
            </Pressable>
        </ImageBackground>
        </View>

        <View style={styles.CatSubMain}>
            <Text style={styles.catName}>PANT</Text>
        <ImageBackground source={type=='womenPant' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
            <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('womenPant')}
                >
                    {
                        type=='womenPant' ?
                        <Image source={require('./../assets/CatWomen/womenpantwhite.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatWomen/womenpantblack.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }

            </Pressable>
        </ImageBackground>
        </View>
    </View>


    <View style={styles.subCatDiv}>

<View style={styles.CatSubMain}>
<Text style={styles.catName}>WAIST COAT</Text>
        <ImageBackground source={type=='womenWais' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
        <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('womenWais')}
                >
                    {
                        type=='womenWais' ?
                        <Image source={require('./../assets/CatWomen/womenwaistcoatwhite_1.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatWomen/womenwaistcoatblack.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }

            </Pressable>
        </ImageBackground>
        </View>

        <View style={styles.CatSubMain}>
            <Text style={styles.catName}>SHIRT</Text>

        <ImageBackground source={type=='womenShir' ? Blackcircle1 : Whitecircle1} style={styles.CatBg}>
        <Pressable style={styles.subCatPress}
                onPress={()=>handleSelector('womenShir')}
                >
                    {
                        type=='womenShir' ?
                        <Image source={require('./../assets/CatWomen/womenshirtwhite_1.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                        :
                        <Image source={require('./../assets/CatWomen/womenshirtblack_1.png')}
                        style={{resizeMode:'contain',height:'50%',width:'50%'}}
                        />
                    }

            </Pressable>
        </ImageBackground>
        </View>
    </View>

</View>

}

</ScrollView>
    </View>
        )
}

export default Categories

const styles = StyleSheet.create({
    CatTItles:{
        width:wp(70),
        marginLeft:wp(15),
        flexDirection:'row',
        // justifyContent:'space-around',
        marginTop:wp(2),
        marginBottom:hp(2)
    },
    CatTxt:{
        fontSize:wp(6),
        textAlign:'center',
        color:'lightgray',
        fontFamily:'Megante-Personal-Use'
    },
    catName:{
        fontFamily:'Megante-Personal-Use'
    },
    womenTxt:{
        borderLeftColor:'black',
        borderLeftWidth:1,
        width:'50%'
    },
    menTxt:{
        borderRightColor:'black',
        borderRightWidth:1,
        width:'50%',
    },
    subCatMain:{
        width:wp(94),
        margin:'auto'
    },
    subCatDiv:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:hp(10),
        // marginTop:hp(4)
    },
    CatBg:{
        height:wp(42),
        width:wp(42),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    CatSubMain:{
        alignItems:'center',
        marginTop:hp(5),
        height:wp(42),
        width:wp(42),
        marginBottom:hp(2)

        
    },
    cateMain:{
        width:wp(94),
        marginLeft:wp(3),
        height:hp(70),
        paddingBottom:hp(10)
        // backgroundColor:'red'
    },
    subCatPress: {
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
}
})