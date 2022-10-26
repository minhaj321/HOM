import React,{useState} from 'react'
import HeaderBgImg from './../assets/headershape.png'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { ScrollView,ImageBackground ,Image, Text,View,StyleSheet, Pressable} from 'react-native'
import Blackcircle1 from './../assets/circle/blackcircle1.png'
import Whitecircle1 from './../assets/circle/whitecircle1.png'

const DetailsHeader = ({type,categoryHandler}) => {

    var [men,setMan] = useState((type=='womenPant' || type=='womenWais' || type=='womenShir' || type=='womenCoat') ? false : true)
    var [type,setType] = useState(type)

    var man = [
        {title:'menCoat',tag:'Coat',
        black:
        <Image source={require('./../assets/CatMan/mencoatblack.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />,
        white:
        <Image source={require('./../assets/CatMan/mencoatwhite.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />},
        
        {title:'menPant',tag:'Pant',
        black:
        <Image source={require('./../assets/CatMan/menpantblack.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />,
        white:
        <Image source={require('./../assets/CatMan/menpantwhite.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />},
        
        {title:'menSher',tag:'Sherwani',
        black:<Image source={require('./../assets/CatMan/mensherwani.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />,
        white:<Image source={require('./../assets/CatMan/mensherwaniwhite.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />},
        
        {title:'menPrin',tag:'Prince Coat',
        black:
        <Image source={require('./../assets/CatMan/prince-coat-black-333.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />,
        white:
        <Image source={require('./../assets/CatMan/prince-coat-men-white.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />},
        
        {title:'menWais',tag:'Waist Coat',
        black:
        <Image source={require('./../assets/CatMan/menwaistcoatblack.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />,
        white:
        <Image source={require('./../assets/CatMan/menwaistcoatwhite.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />},
        
        {title:'menShir',tag:'Shirt',
        black:
        <Image source={require('./../assets/CatMan/menshirtblack.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />,
        white:
        <Image source={require('./../assets/CatMan/menshirtwhite.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />
    },
    ]
    var women = [
        {title:'womenCoat',tag:'Coat',
        black:
        <Image source={require('./../assets/CatWomen/womencoatblack.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />,
        white:<Image source={require('./../assets/CatWomen/womencoatwhite.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />},
        
        {title:'womenPant',tag:'Pant',
        black:
        <Image source={require('./../assets/CatWomen/womenpantblack.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />
,
        white:
        <Image source={require('./../assets/CatWomen/womenpantwhite.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />},
        
        {title:'womenWais',tag:'Waist Coat',
        black:
        <Image source={require('./../assets/CatWomen/womenwaistcoatblack.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />
,
        white:
        <Image source={require('./../assets/CatWomen/womenwaistcoatwhite_1.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />
},
        
        {title:'womenShir',tag:'Shirt',
        black:
        <Image source={require('./../assets/CatWomen/womenshirtblack_1.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />
,
        white:
        <Image source={require('./../assets/CatWomen/womenshirtwhite_1.png')}
        style={{resizeMode:'contain',height:'50%',width:'50%'}}
        />
},
    ]


    return (
    <View>
        <ImageBackground source={HeaderBgImg} style={{alignItems:'center',paddingTop:wp(5),width:wp(100),height:hp(20)}} >
        {/* <Headerlogo style={{width:wp(8),height:wp(8)}}  /> */}
<Image source={require('./../assets/logo/logo11.png')} style={{width:wp(15),height:wp(15)}} />

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
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
            <View style={styles.detailsScrollBar}>
        { men &&
            man.map((v,i)=>(
                <View style={styles.detMainComp} key={i}>
                <ImageBackground key={i} source={type==v.title ? Blackcircle1 : Whitecircle1} style={styles.detailsCatSmallDiv}>
                 <Pressable style={{height:'100%',width:'100%',...styles.detailsCatSmallDiv,marginLeft:wp(0),marginTop:wp(0)}}
                 onPress={()=>
                    {   categoryHandler(v.title)
                        setType(v.title)
                    }
                }
                 >
                    {
                        type==v.title ? 
                        v.white
                        :
                        v.black
                    }
                    </Pressable>
                </ImageBackground>
                <Text style={styles.tag}>{v.tag}</Text>
                </View>
            ))
        }
        { !men &&
            women.map((v,i)=>(
                <View style={styles.detMainComp} key={i}>
                <ImageBackground key={i} source={type==v.title ? Blackcircle1 : Whitecircle1} style={styles.detailsCatSmallDiv}>
                 <Pressable style={{height:'100%',width:'100%',...styles.detailsCatSmallDiv,marginLeft:wp(0),marginTop:wp(0)}}
                 onPress={()=>{
                    categoryHandler(v.title)
                    setType(v.title) 
                }}
                 >
                    {
                        type==v.title ? 
                        v.white
                        :
                        v.black
                    }
                    </Pressable>
                </ImageBackground>
                <Text style={styles.tag}>{v.tag}</Text>
                </View>

))
        }
        
        </View>
        </ScrollView>

    </View>
    )
}

export default DetailsHeader

const styles = StyleSheet.create({
    CatTItles:{
        width:wp(70),
        marginLeft:wp(15),
        flexDirection:'row',
        // justifyContent:'space-around',
        marginTop:wp(2)
    },
    CatTxt:{
        fontSize:wp(5),
        fontFamily:'Megante-Personal-Use',
        color:'lightgray',
        textAlign:'center'

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
    detailsCatSmallDiv:{
        alignItems:'center',
        // marginTop:hp(5),
        height:wp(20),
        width:wp(20),
        justifyContent:'center',
        // marginLeft:wp(3),
        marginTop:hp(2)
        // marginBottom:hp(2)
    },
    detMainComp:{
        flexDirection:'column',
        marginLeft:wp(3),
        alignItems:'center',
    },
    detailsScrollBar:{
        flexDirection:'row',
        display:'flex',
    },
    tag:{
      color:'#333333',
      fontSize:wp(3.5),
      fontFamily:'Megante-Personal-Use'
    }
})