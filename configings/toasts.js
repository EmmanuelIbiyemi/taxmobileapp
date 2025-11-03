import { View , Text , StyleSheet } from "react-native"
import { CheckCircle , ShieldClose , Star} from "lucide-react-native"


// Custom toast component - simplified without progress bar
const CustomToast = ({ text1, text2, hide, iconColor }) => (
  <View style={styles.customToast}>
    <Star size={24} color={iconColor || '#FFD700'} />
    <View style={styles.textContainer}>
      <Text style={styles.customTitle}>{text1}</Text>
      {text2 && <Text style={styles.customMessage}>{text2}</Text>}
    </View>
    <ShieldClose size={20} color='#fff' onPress={hide} />
  </View>
)

// Custom toast configuration
export const toastConfig = {
  customSuccess: (props) => (
    <View style={styles.customSuccessToast}>
      <CheckCircle size={24} color='#fff' />
      <View style={styles.textContainer}>
        <Text style={styles.customTitle}>{props.text1}</Text>
        {props.text2 && <Text style={styles.customMessage}>{props.text2}</Text>}
      </View>
    </View>
  ),
  custom: (props) => <CustomToast {...props} />,
}

const styles = StyleSheet.create({
    customSuccessToast:{
      width: '90%',
      backgroundColor: '#4CAF50',
      borderRadius: 10,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textContainer:{
      flex: 1,
      marginLeft: 10,
    },
    customTitle:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    customMessage:{
      color: '#fff',
      fontSize: 14,
      marginTop: 4,
    }
})