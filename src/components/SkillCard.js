import React from 'react';
import { 
    TouchableOpacity,
    StyleSheet,
    Text
 } from 'react-native';

export function SkillCard({ skill }){
    return(
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>
            {skill}
          </Text>
        </TouchableOpacity>
    )
}

const styles =  StyleSheet.create({
    textSkill: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
      }, 
      
      buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 5,
        borderRadius: 7,
        alignItems: 'center',
        marginVertical: 5
      }
})