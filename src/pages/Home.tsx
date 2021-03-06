import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList
  } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
    date?: Date;
}

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGrettig] = useState('');

  function handleAddNewSkill(){
    const data = {
        id: String(new Date().getTime()),
        name: newSkill
    }
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
        skill => skill.id !== id)
    )
  }

  useEffect(() => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      setGrettig('Good Morning');
    } else 
    if (currentHour >= 12 && currentHour < 18) {
      setGrettig('Good Afternoon');
    } else {
      setGrettig('Good Night');
    } 

  }, [])

  return (
    <View style={styles.container}>
      
    <Text style={styles.title}>
        Welcome, Artur Rafael
    </Text>

    <Text style={styles.greetings}>
        {gretting}
    </Text>

    <TextInput style={styles.input} 
        placeholder="New skill" 
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
    />

    <Button 
        onPress={handleAddNewSkill}
        title={'Add'} 
    />

      <Text style={[styles.title, { marginVertical:15 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard 
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
      )}
     />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 25,
    paddingVertical:25,
  },

  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },

  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 15,
    borderRadius: 7
  },

  greetings: {
    color: '#FFF',
  }

});