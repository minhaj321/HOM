import React, { useState,useRef,useEffect } from 'react'
import { View ,Text,StyleSheet,ScrollView, Pressable, Alert} from 'react-native'
import DetailsHeader from './../components/DetailsHeader.js'; 
import {CoatArray, menprincecoat, mensherwani, ShirtArray, menPant,womenCoatArray,menWaistCoat,womenShirt, womenWaist, womenPant} from './../components/DataArrays.js';
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
  var [currentArray,setCurrentArray] = useState({})
  var { selectedType } = route.params;
  var dispatch = useDispatch();
  var isFocusd = useIsFocused();
  var reduxData = useSelector(state=>state)

  useEffect(()=>{
    categoryHandler(selectedType)
console.log("in effect")
  },[])

  if(isFocusd && currentItems==null){
    // console.log('')
    if(selectedType=='menCoat'){
      console.log("coat->",selectedType)
      setCurrentItems(CoatArray.step1)
      setCurrentArray(CoatArray)
    }else if(selectedType=='womenCoat'){
      setCurrentItems(womenCoatArray.step1)
      setCurrentArray(womenCoatArray)
    }else if(selectedType=='menPrin'){
      setCurrentItems(menprincecoat.step1)
      setCurrentArray(menprincecoat)
    }else if(selectedType=='menSher'){
      setCurrentItems(mensherwani.step1)
      setCurrentArray(mensherwani)
    }else if(selectedType=='menWais'){
      setCurrentItems(menWaistCoat.step1)
      setCurrentArray(menWaistCoat)
    }else if(selectedType=='womenShir'){
      setCurrentItems(womenShirt.step1)
      setCurrentArray(womenShirt)
    }else if(selectedType=='womenWais'){
      setCurrentItems(womenWaist.step1)
      setCurrentArray(womenWaist)
    }else if(selectedType=='menPant'){
      setCurrentItems(menPant.step1)
      setCurrentArray(menPant)
    }else if(selectedType=='womenPant'){
      setCurrentItems(womenPant.step1)
      setCurrentArray(womenPant)
    }
    else{
      setCurrentItems(ShirtArray.step1)
      setCurrentArray(ShirtArray)
    }
    
  }

  var ref = useRef();
  var refNew = useRef();
  
  const _renderItem = (item)=>{

    return(
      <View key={item} style={{height:hp(50),

        width: currentItems==CoatArray.step3 ? 
      (item.index==carouselIndex ? '120%' : '70%') :
      currentItems==ShirtArray.step6 ? 
      (item.index==carouselIndex ? '110%' : '50%') :
      currentItems==womenShirt.step1 ? 
      (
        (carouselIndex==2 || carouselIndex==11 || carouselIndex==12 || carouselIndex==10 || carouselIndex==8 || carouselIndex==6) ?
        (item.index==carouselIndex ? '140%' : '40%') :
        (item.index==carouselIndex ? '110%' : '50%')
      )
       :
       currentItems==womenWaist.step1 ? 
       (
         (carouselIndex==4 || carouselIndex==5 || carouselIndex==6 || carouselIndex==7 || carouselIndex==9 || carouselIndex==10 || carouselIndex==11) ?
         (item.index==carouselIndex ? '150%' : '30%') :
         (item.index==carouselIndex ? '100%' : '50%')
       )
        :
        (item.index==carouselIndex ? '100%' : '70%'),

        justifyContent:'center',alignItems:'center',

        marginLeft:(currentItems==CoatArray.step3) ? 
        (item.index==carouselIndex ? '-10%' : '15%') :
        currentItems==ShirtArray.step6 ? 
        (item.index==carouselIndex ? '-5%' : '25%') : 
        currentItems==womenShirt.step1 ? 
        (
          (carouselIndex==2 || carouselIndex==11 || carouselIndex==12 || carouselIndex==10 || carouselIndex==8 || carouselIndex==6) ?  
        (item.index==carouselIndex ? '-25%' : '25%') :
        (item.index==carouselIndex ? '-5%' : '25%')
        
        ):
        currentItems==womenWaist.step1 ? 
        (
          (carouselIndex==4 || carouselIndex==5 || carouselIndex==6 || carouselIndex==7 || carouselIndex==9 || carouselIndex==10 || carouselIndex==11) ?
          (item.index==carouselIndex ? '-30%' : '30%') :
          (item.index==carouselIndex ? '-0%' : '25%')
          )
         : 
         (carouselIndex==1 && currentItems==mensherwani.step1) ? 
         (item.index==carouselIndex ? '-7%' : '15%')  :   
         item.index==carouselIndex ? '0%' : '15%',

zIndex:-1}}>
        <Pressable ref={ref} style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}
        onPress={()=>{
          if(selectedIndex>-1){
          setSelectedIndex(-1)
          }else{
            setSelectedIndex(carouselIndex)
          }
        }}
        >
        {item.item}
        </Pressable>
      </View>
    )
  }

  // shadow condition
  var shadowCond = (currentItems==CoatArray.step2 || 
    currentItems==CoatArray.step3 || 
    currentItems==CoatArray.step5 || 
    currentItems==CoatArray.step6 || 
    currentItems==ShirtArray.step6 || 
    currentItems==ShirtArray.step7 || 
    currentItems==ShirtArray.step8 || 
    currentItems==ShirtArray.step9 || 
    currentItems==womenShirt.step1 || 
    currentItems==womenWaist.step1 || 
    currentItems==menPant.step1 || 
    currentItems==womenPant.step1)
    ? false : true;

  const handleNext =()=>{
    if(selectedIndex==-1){
      // element is selected
    }else{
      setCurrentItems(1)
      // coat
      var res = HandleCoat(currentItems,selectedIndex,setCurrentItems,setCurrentType)
      if(res=='result'){
        dispatch(setResult('result',{title:'coat',data:[...reduxData.men.coat,selectedIndex]}))
        dispatch(setResult('reset',{title:'coat'}))
          
          navigation.navigate('OutputPage')
          setCurrentItems(null)
      }else if(res!='def'){
        console.log("coat")
        
        dispatch(setCurrentType(res,selectedIndex));
        navigation.reset({
          index: 0,
          routes: [{ name: 'details',params:{
            selectedType:selectedType
          }}]
      })
      
      }

      // women coat
      if(currentItems==womenCoatArray.step1){
        dispatch(setResult('result',{title:'womanCoat',data:[selectedIndex]}))
        navigation.navigate('OutputPage')
        setCurrentItems(null)
      }

      // men prince coat
      if(currentItems==menprincecoat.step1){
        dispatch(setResult('result',{title:'menprincecoat',data:[selectedIndex]}))
        navigation.navigate('OutputPage')
        setCurrentItems(null)
      }

      // women shirt 
      if(currentItems==womenShirt.step1){
        dispatch(setResult('result',{title:'womenShirt',data:[selectedIndex]}))
        navigation.navigate('OutputPage')
        setCurrentItems(null)
      }

      // men pant
      if(currentItems==menPant.step1){
        dispatch(setResult('result',{title:'menPant',data:[selectedIndex]}))
        navigation.navigate('OutputPage')
        setCurrentItems(null)
      }


      // mew waist coat
      if(currentItems==menWaistCoat.step1){
        dispatch(setResult('result',{title:'menWais',data:[selectedIndex]}))
        navigation.navigate('OutputPage')
        setCurrentItems(null)
      }
      
      // womew waist coat
      if(currentItems==womenWaist.step1){
        dispatch(setResult('result',{title:'womenWais',data:[selectedIndex]}))
        navigation.navigate('OutputPage')
        setCurrentItems(null)
      }

      // womew pant
      if(currentItems==womenPant.step1){
        dispatch(setResult('result',{title:'womenPant',data:[selectedIndex]}))
        navigation.navigate('OutputPage')
        setCurrentItems(null)
      }
      
      
      // men sherwano 
      if(currentItems==mensherwani.step1){
        console.log("mensherwani inside")
        dispatch(setResult('result',{title:'mensherwani',data:[selectedIndex]}))
        navigation.navigate('OutputPage')
        setCurrentItems(null)
      }


      // shirt
    var res = HandleShirt(currentItems,selectedIndex,setCurrentItems,setCurrentType,reduxData);
    if(res=='result'){
      dispatch(setResult('result',{title:'shirt',data:[...reduxData.men.shirt,selectedIndex]}))
      navigation.navigate('OutputPage')
      setCurrentItems(null)
  }else if(res=='resultPasssed'){
    // dispatch(setCurrentType(res,selectedIndex));
    dispatch(setResult('result',{title:'shirt',data:
    [reduxData.men.shirt[0],reduxData.men.shirt[1],reduxData.men.shirt[2],reduxData.men.shirt[3],
    reduxData.men.shirt[4],reduxData.men.shirt[5],reduxData.men.shirt[6],selectedIndex]
  }))
    navigation.navigate('OutputPage')
      setCurrentItems(null)
  }
  else if(res!='def'){
    dispatch(setCurrentType(res,selectedIndex));
    navigation.reset({
      index: 0,
      routes: [{ name: 'details',params:{
        selectedType:selectedType
      }}]
  })
  
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

  var categoryHandler=(val)=>{
// womenPant remaining
switch(val){
  case 'menCoat':
    {
      if(reduxData.men.coat[0]==-1){
        setCurrentItems(CoatArray.step1)
        setCurrentArray(CoatArray)  
      }else if(reduxData.men.coat[1]==-1){
        setCurrentItems(CoatArray.step2)
        setCurrentArray(CoatArray)  
      }else if(reduxData.men.coat[2]==-1){
        setCurrentItems(CoatArray.step3)
        setCurrentArray(CoatArray)  
      }else if(reduxData.men.coat[3]==-1){
        setCurrentItems(CoatArray.step4)
        setCurrentArray(CoatArray)  
      }else if(reduxData.men.coat[4]==-1){
        setCurrentItems(CoatArray.step5)
        setCurrentArray(CoatArray)  
      }else{
        setCurrentItems(CoatArray.step6)
        setCurrentArray(CoatArray)  
      }  
    }
    break;
  case 'womenCoat':
      {
        setCurrentItems(womenCoatArray.step1)
        setCurrentArray(womenCoatArray)
            }
      break;
  case 'menPrin':
        {
          setCurrentItems(menprincecoat.step1)
          setCurrentArray(menprincecoat)
                }
        break;
  case 'menSher':
          {
            setCurrentItems(mensherwani.step1)
            setCurrentArray(mensherwani)
                    }
          break;
  case 'menWais':
            {
              setCurrentItems(menWaistCoat.step1)
              setCurrentArray(menWaistCoat)
                                  }
            break;
  case 'womenShir':
            {
              setCurrentItems(womenShirt.step1)
              setCurrentArray(womenShirt)
                }
            break;
  case 'womenWais':
              {
                setCurrentItems(womenWaist.step1)
                setCurrentArray(womenWaist)
                  }
              break;  
  case 'menPant':
                {
                  setCurrentItems(menPant.step1)
                  setCurrentArray(menPant)
                    }
              break;  
  case 'womenPant':
                {
                  setCurrentItems(womenPant.step1)
                  setCurrentArray(womenPant)
                    }
              break;  
  default:
            {
              if(reduxData.men.shirt[0]==-1){
                setCurrentItems(ShirtArray.step1)
                setCurrentArray(ShirtArray)
                }else if(reduxData.men.shirt[1]==-1){
                  setCurrentItems(ShirtArray.step2)
                  setCurrentArray(ShirtArray)
                }else if(reduxData.men.shirt[2]==-1){
                  setCurrentItems(ShirtArray.step3)
                  setCurrentArray(ShirtArray)
                }else if(reduxData.men.shirt[3]==-1){
                  setCurrentItems(ShirtArray.step4)
                  setCurrentArray(ShirtArray)
                }else if(reduxData.men.shirt[4]==-1){
                  setCurrentItems(ShirtArray.step5)
                  setCurrentArray(ShirtArray)
                }else if(reduxData.men.shirt[5]==-1){
                  setCurrentItems(ShirtArray.step6)
                  setCurrentArray(ShirtArray)
                }else if(reduxData.men.shirt[6]==-1){
                  setCurrentItems(ShirtArray.step7)
                  setCurrentArray(ShirtArray)
                }else if(reduxData.men.shirt[7]==-1){
                  setCurrentItems(ShirtArray.step8)
                  setCurrentArray(ShirtArray)
                }else{
                setCurrentItems(ShirtArray.step9)
                setCurrentArray(ShirtArray)  
              }          
          }
            break;
  }
    }

// 1

  return (
    <ScrollView style={{backgroundColor:'#fff'}}>
        <DetailsHeader type={selectedType} categoryHandler={categoryHandler} />
        
        <Text style={[styles.txtCenter,styles.txtMargin]}>{(currentItems==womenCoatArray.step1 || currentItems==menWaistCoat.step1 ) ? currentItems?.title[carouselIndex]  :  currentItems?.title}</Text>

        <Text style={styles.txtCenter}>{currentItems?.tags[carouselIndex]}</Text>
        
        <Image source={require('./../assets/lineshape.png')} style={styles.line} />
        <View style={
          currentItems==womenShirt.step1 ?
          ( (carouselIndex==2 || carouselIndex==8 || carouselIndex==6) ?
            {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'47%',left:'65%'} :
            (carouselIndex==0) ?
            {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'50%',left:'60%'} :
            {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'50%',left:'65%'}
          ): currentItems==womenPant.step1 ?
          ( (carouselIndex==16) ?
            {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'50%',left:'55%'} :
            {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'50%',left:'62%'}
          ):
          currentItems==womenWaist.step1 ?
          ( (carouselIndex==0) ?
            {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'47%',left:'65%'} :
            (carouselIndex==4 || carouselIndex==5 || carouselIndex==6 || carouselIndex==7 ||
              carouselIndex==9 || carouselIndex==11) ?
            {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'50%',left:'75%'} :
            (carouselIndex==10) ?
            {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'52%',left:'70%'} :
            {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'50%',left:'65%'}
          ):
          currentItems==CoatArray.step1 ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'47%',left:'65%'} :
          (currentItems==CoatArray.step2) ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'45%',left:'68%'} :
          currentItems==mensherwani.step1 ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'40%',left:'60%'} :
          currentItems==CoatArray.step3 ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'41%',left:'65%'} : 
          (    currentItems==ShirtArray.step1 
            || currentItems==ShirtArray.step2 
            || currentItems==ShirtArray.step3 
        ) ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'50%',left:'60%'} : 
          currentItems==menprincecoat.step1 ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'44%',left:'67%'} : 
          (
            currentItems==ShirtArray.step6 
            || currentItems==ShirtArray.step7 
            || currentItems==ShirtArray.step8 
            || currentItems==ShirtArray.step9
          ) ?
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'50%',left:'70%'} : 
          {...styles.tick,opacity:selectedIndex==carouselIndex ? 1 : 0,top:'47%',left:'63%'} 
          }>
      <AntDesign name='check' color={'#fff'} size={wp(6)} />
        </View>

        <Carousel
        ref={refNew}
        onSnapToItem={e=>{
          setCarouselIndex(e)
        }}
            inactiveSlideOpacity={0.5}
            data={currentItems?.images}
              renderItem={_renderItem}
              sliderWidth={wp(100)}
              itemWidth={wp(50)}
              
            />{
              shadowCond 
                &&
              <Image source={require('./../assets/Shadow.png')} style={
                (currentItems==mensherwani.step1 || currentItems== womenCoatArray.step1) ? {...styles.shadow,marginTop:hp(0)} : 
                (currentItems==ShirtArray.step1  || 
                  currentItems==ShirtArray.step2 || 
                  currentItems==ShirtArray.step3) ? 
                  {...styles.shadow,marginTop:hp(-5)} :
                  currentItems==menprincecoat.step1 ? 
                  {...styles.shadow,marginTop:hp(1)} :  
              {...styles.shadow,marginTop:hp(0)}} />
            }
            <View style={!(currentArray.hasOwnProperty('step2')) ? {...styles.detailsBtns,justifyContent:'center'} : styles.detailsBtns }>
            { (currentArray.hasOwnProperty('step2')) &&
              <View style={styles.backBtn}>
                <Pressable style={styles.prevPres} onPress={()=>handleBack()}>
                  <Text style={styles.backTxt}>Back</Text>
                </Pressable>
              </View>
            }

              <View style={selectedIndex==-1 ? {...styles.nextBtn,backgroundColor:'gray'} : styles.nextBtn }>
              <Pressable style={styles.nextPres} onPress={()=>handleNext()}>
                  <Text style={styles.nextTxt}>{!(currentArray.hasOwnProperty('step2')) ? 'View Order' : 'Next'}</Text>
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
    marginTop:hp(0.5),
    marginBottom:hp(1)
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
},
shadow:{
  resizeMode:'contain',
  height:hp(5),
  width:'54%',
  marginLeft:'23%',
  marginTop:hp(4)
}
})