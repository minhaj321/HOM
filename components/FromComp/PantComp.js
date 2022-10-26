import React from 'react'
import {View,StyleSheet,Text,Image, TextInput} from 'react-native'
import Line from './../../assets/nameline.jpg';
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen';

const PantComp = ({data,setData}) => {




    return (

<View>
    <View style={styles.lineMain}>
    <Text style={styles.heading}>PANT</Text>
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
<Text style={styles.InputText}>Balance</Text>
    <TextInput style={styles.inputField}  
    value={data.balance}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,balance:txt})}
    />
</View>
</View>

<View style={styles.inputHeadMain}>
<View style={styles.inputSubMain}>
<Text style={styles.InputText}>Bottom</Text>
    <TextInput style={styles.inputField}
    value={data.bottom}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,bottom:txt})}
    />

</View>
<View style={styles.inputSubMain}>
    <Text style={styles.InputText}>Fly</Text>
    <TextInput style={styles.inputField}  
    value={data.fly}
    keyboardType={'number-pad'}
    onChangeText={txt=>setData({...data,fly:txt})}
      />
</View>
</View>

</View>

    )
}

export default PantComp

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