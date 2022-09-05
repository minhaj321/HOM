import React, { useEffect } from 'react';
import { View ,StyleSheet,Text,Image,Animated} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderLogo from './../assets/logo/logo11.png'

var scaleMe = new Animated.Value(4)
var opacBg = new Animated.Value(0)
var rotateMe = new Animated.Value(0)
var translateMe = new Animated.Value(0)

const spin = rotateMe.interpolate({
    inputRange: [-1,0, 1],
    outputRange: [ '-360deg','0deg', '360deg'],
  });


const SplashScreen = ({navigation}) => {

var animeScaling =Animated.sequence([
    Animated.parallel([
        Animated.timing(opacBg,{
            delay:100,
            toValue:1,
            duration:100,
            useNativeDriver:true
        }),
        Animated.timing(scaleMe,{
            toValue:0.8,
            duration:400,
            useNativeDriver:true
        }),
    ]),
    Animated.timing(scaleMe,{
        toValue:1,
        duration:100,
        useNativeDriver:true

    }),
    Animated.parallel([
        Animated.spring(translateMe,{
            delay:300,
            duration:400,
            useNativeDriver:true,
            toValue:-hp(50)
        }),
        Animated.spring(rotateMe,{
            delay:300,
            useNativeDriver:true,
            duration:400,
            toValue:-0.25            
        })
    ]),
        // Animated.spring(translateMe,{
        //     duration:100,
        //     useNativeDriver:true,
        //     toValue:-hp(50)
        // }),

])

useEffect(()=>{
animeScaling.start()
setTimeout(()=>{
navigation.navigate('categories')
},1250)
},[])

    return (
    <View style={styles.splashMain}>

<Animated.View style={styles.bgImgStyle}>
<Image source={require('./../assets/logo/logo11.png')} style={styles.splashIcon} />
</Animated.View>

    </View>
    )

}

export default SplashScreen

const styles = StyleSheet.create({
    splashMain:{
        width:wp(100),
        height:hp(100),
        backgroundColor:'#333333',
        justifyContent:'center',
        alignItems:'center'
    },
    bgImgStyle:{
        height:hp(50),
        width:wp(44),
        backgroundColor:'#fff',
        borderRadius:wp(50),
        transform:[{scale:scaleMe},{translateY:translateMe}
            ,{rotate:spin}
        ],
        opacity:opacBg,
        justifyContent:'center',
        alignItems:'center'
    },
    splashIcon:{
        borderRadius:wp(50),
        height:wp(25),
        width:wp(25),

    }
})