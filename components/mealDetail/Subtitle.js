import { Children } from 'react'
import {View,Text,StyleSheet} from 'react-native'
function Subtitle({children})
{
    return(
<View style={styles.sbutitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
      </View>
    )
}
export default Subtitle
const styles=StyleSheet.create({
    subtitle:
    {
      textAlign:'center',
      color:'#e2b497',
      fontSize:18,
      fontWeight:'bold',    
    },
    sbutitleContainer:{
      borderBottomColor:'#e2b497',
      borderBottomWidth:2,
      padding:6,
      marginHorizontal:12,
      marginVertical:4,
    }
})