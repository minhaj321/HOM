import React, { useState,useRef } from 'react'
import { View ,Text,StyleSheet,ScrollView, Pressable, Alert} from 'react-native'
import DetailsHeader from './../components/DetailsHeader.js'; 
import {CoatArray, ShirtArray, womenCoatArray} from './../components/DataArrays.js';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import { Image,ImageBackground } from 'react-native';
import { ZStack } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector,useDispatch } from 'react-redux';
import { setResult } from '../Store/action';
import {setCurrentType} from './../Store/action';
import { useIsFocused } from '@react-navigation/native';
import { HandleCoat,HandleCoatBack } from '../functions/HandleCoat.js';
import { HandleShirt,HandleShirtBack } from '../functions/HandleShirt.js';

const ItemDetails = ({navigation,route}) => {

  var [carouselIndex,setCarouselIndex] = useState(0)
  var [selectedIndex,setSelectedIndex] = useState(-1)
  var [currentItems,setCurrentItems] = useState(null)
  var { selectedType } = route.params;
  var dispatch = useDispatch();
  var isFocusd = useIsFocused();
  var reduxData = useSelector(state=>state)
  
  if(isFocusd && currentItems==null){
    if(selectedType=='menCoat'){
      console.log("coat->",selectedType)
      setCurrentItems(CoatArray.step1)
    }else if(selectedType=='womenCoat'){
      setCurrentItems(womenCoatArray.step1)
    }
    else{
      console.log("shirt-->",selectedType)
      setCurrentItems(ShirtArray.step1)
    }
  }

  var ref = useRef();

  const _renderItem = (item)=>{

    return(
      <View key={item} style={{height:hp(50),width:item.index==carouselIndex ? '100%' : '70%',justifyContent:'center',alignItems:'center',marginLeft:item.index==carouselIndex ? '0%' : '15%',zIndex:-1}}>
        <Pressable ref={ref} style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}
        onPress={()=>{
          setSelectedIndex(carouselIndex)
        }}
        >
        {item.item}
        </Pressable>
      </View>
    )
  }

  const handleNext =()=>{
    if(selectedIndex==-1){
      // element is selected
    }else{

      // coat
      var res = HandleCoat(currentItems,selectedIndex,setCurrentItems,setCurrentType)
      if(res=='result'){
          dispatch(setResult('result',{title:'coat',data:[...reduxData.men.coat,selectedIndex]}))
          navigation.navigate('OutputPage')
          setCurrentItems(null)

      }else if(res!='def'){
        console.log("coat")
        dispatch(setCurrentType(res,selectedIndex));
      }

      // women coat
      if(currentItems==womenCoatArray.step1){
        console.log("womancoat inside")
        dispatch(setResult('result',{title:'womanCoat',data:[selectedIndex]}))
        navigation.navigate('OutputPage')
        setCurrentItems(null)
      }

      // shirt
    var res = HandleShirt(currentItems,selectedIndex,setCurrentItems,setCurrentType);
    if(res=='result'){
      dispatch(setResult('result',{title:'shirt',data:[...reduxData.men.shirt,selectedIndex]}))
      navigation.navigate('OutputPage')
      setCurrentItems(null)
  }else if(res!='def'){
    dispatch(setCurrentType(res,selectedIndex));
  }


  // reset selected Index
    setSelectedIndex(-1)
  }
  }

  const handleBack =()=>{

    // back handler for coat 
    HandleCoatBack(currentItems,selectedIndex,setCurrentItems,setCurrentType)

    // back handler for shirt
    HandleShirtBack(currentItems,selectedIndex,setCurrentItems,setCurrentType)

  }


  return (
    <ScrollView>
        <DetailsHeader/>
        
        <Text style={[styles.txtCenter,styles.txtMargin]}>{currentItems==womenCoatArray.step1 ? currentItems?.title[carouselIndex]  :  currentItems?.title}</Text>

        <Text style={styles.txtCenter}>{currentItems?.tags[carouselIndex]}</Text>
        
        <Image source={require('./../assets/lineshape.png')} style={styles.line} />
        <View style={
          currentItems==CoatArray.step1 ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'47%',left:'65%'} :
          (currentItems==CoatArray.step2 || currentItems==ShirtArray.step1 
            || currentItems==ShirtArray.step2 
            || currentItems==ShirtArray.step3 
            || currentItems==ShirtArray.step6 
            || currentItems==ShirtArray.step7 
            || currentItems==ShirtArray.step8 
            || currentItems==ShirtArray.step9) ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'50%',left:'64%'} :
          currentItems==CoatArray.step3 ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'45%',left:'63%'} : 
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'47%',left:'63%'} 
          }>
      <AntDesign name='check' color={'#fff'} size={wp(6)} />
        </View>

        <Carousel
        onSnapToItem={e=>{
          setCarouselIndex(e)
        }}
            inactiveSlideOpacity={0.5}
            data={currentItems?.images}
              renderItem={_renderItem}
              sliderWidth={wp(100)}
              itemWidth={wp(50)}
              
            />{
              !(currentItems==CoatArray.step2 || currentItems==CoatArray.step3 || currentItems==CoatArray.step5 || currentItems==CoatArray.step6
                || currentItems==ShirtArray.step6 || currentItems==ShirtArray.step7 || currentItems==ShirtArray.step8 || currentItems==ShirtArray.step9) &&
              <Image source={require('./../assets/Shadow.png')} style={(currentItems==ShirtArray.step1  || currentItems==ShirtArray.step2 || currentItems==ShirtArray.step3) ? {resizeMode:'contain',height:hp(5),width:'54%',marginTop:hp(-10),marginLeft:'23%'} : 
              {resizeMode:'contain',height:hp(5),width:'54%',marginTop:hp(-4),marginLeft:'23%'}} />
            }
            <View style={(currentItems==CoatArray.step1 || currentItems==ShirtArray.step1 || currentItems==womenCoatArray.step1) ? {...styles.detailsBtns,justifyContent:'center'} : styles.detailsBtns }>
            { !(currentItems==CoatArray.step1 || currentItems==ShirtArray.step1 || currentItems==womenCoatArray.step1) &&
              <View style={styles.backBtn}>
                <Pressable style={styles.prevPres} onPress={()=>handleBack()}>
                  <Text style={styles.backTxt}>Back</Text>
                </Pressable>
              </View>
            }

              <View style={selectedIndex==-1 ? {...styles.nextBtn,backgroundColor:'gray'} : styles.nextBtn }>
              <Pressable style={styles.nextPres} onPress={()=>handleNext()}>
                  <Text style={styles.nextTxt}>{currentItems==womenCoatArray.step1 ? 'View Order' : 'Next'}</Text>
                </Pressable>
              </View>
            </View>

    </ScrollView>
    )
}

export default ItemDetails


const styles = StyleSheet.create({
  txtCenter:{
    textAlign:'center',
    fontSize:wp(4.5),
    marginTop:hp(1),
    fontFamily:'Megante-Personal-Use'
    
  },
  txtMargin:{
    marginTop:wp(5),
  },
  detailsBtns:{
    width:wp(90),
    marginLeft:wp(5),
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:hp(7)
  },
  backBtn:{
    height:hp(7),
    width:'45%',
    borderRadius:100,
    backgroundColor:'#fff',
    elevation:2,
    marginBottom:hp(5)
  },
  nextBtn:{
    height:hp(7),
    width:'45%',
    borderRadius:100,
    backgroundColor:'#333333',
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
  line:{
    // width:wp(30),
    resizeMode:'contain',
    marginLeft:'40%',
    width:'20%',
    height:hp(1),
    marginTop:hp(0.5)
  },
  tick:{
    zIndex:1,
    height:wp(15),
    borderRadius:50,
    width:wp(15),
    position:'absolute',
    backgroundColor:'#333333',
    justifyContent:'center',
    alignItems:'center',
}
})