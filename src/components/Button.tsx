import React from 'react';
import { 
    TouchableOpacity,
    TouchableOpacityProps, 
    Text,
    StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title,...rest } : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={.7}
            {...rest}
        >
                <Text style={styles.buttonText}>
                {title}
                </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 17
      },
    
      button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 15
      }
})