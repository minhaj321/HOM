import React from 'react'
import {View,StyleSheet,Text,Image, TextInput} from 'react-native'
import Line from './../../assets/nameline.jpg';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ShirtComp = ({data,setData}) => {




    return (

<View>
    <View style={styles.lineMain}>
    <Text style={styles.heading}>SHIRT</Text>
    <Image  source={require('./../../assets/nameline.jpg')} style={styles.line} />
    </View>


<View style={styles.inputHeadMain}>
<View style={styles.inputSubMain}>
    <Text style={styles.InputText}>Length</Text>
    <TextInput style={styles.inputField}  
    value={data.length}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,length:txt})}
    />
</View>
<View style={styles.inputSubMain}>
    <Text style={styles.InputText}>Chest</Text>
    <TextInput style={styles.inputField}
    value={data.chest}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,chest:txt})}
    />
</View>
</View>

<View style={styles.inputHeadMain}>
<View style={styles.inputSubMain}>
    <Text style={styles.InputText}>Collar</Text>
    <TextInput style={styles.inputField}  
    value={data.collar}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,collar:txt})}
    />
</View>
<View style={styles.inputSubMain}>
    <Text style={styles.InputText}>Waist</Text>
    <TextInput style={styles.inputField}  
    value={data.waist}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,waist:txt})}
     />
</View>
</View>

<View style={styles.inputHeadMain}>
<View style={styles.inputSubMain}>
    <Text style={styles.InputText}>Hip</Text>
    <TextInput style={styles.inputField}  
    value={data.hip}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,hip:txt})}
      />
</View>
<View style={styles.inputSubMain}>
    <Text style={styles.InputText}>Shoulder</Text>
    <TextInput style={styles.inputField}  
    value={data.shoulder}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,shoulder:txt})}
      />
</View>
</View>

<View style={styles.inputHeadMain}>
<View style={styles.inputSubMain}>
    <Text style={styles.InputText}>Sleeves</Text>
    <TextInput style={styles.inputField}  
    value={data.sleeves}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,sleeves:txt})}
      />
</View>
<View style={styles.inputSubMain}>
</View>
</View>



</View>

    )
}

export default ShirtComp

const styles = StyleSheet.create({
    line:{
        width:'25%',
        resizeMode:'contain',
        marginTop:hp(1),
        marginBottom:hp(5)
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
        marginTop:hp(0.5)
    },
    lineMain:{
        width:'100%',
        alignItems:'center'
    },
    heading:{
        fontSize:wp(5),
        marginTop:hp(2),
        fontFamily:'Megante-Personal-Use'
    },
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
    }
})