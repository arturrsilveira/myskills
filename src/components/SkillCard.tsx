import React from 'react';
import { 
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet,
    Text
 } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest } : SkillCardProps){
    return(
        <TouchableOpacity 
          style={styles.buttonSkill}
          {...rest}
        >
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