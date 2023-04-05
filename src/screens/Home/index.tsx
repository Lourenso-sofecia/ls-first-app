import React, { useState } from "react";
import { 
    Text, 
    View, 
    TextInput,
    TouchableOpacity, 
    ScrollView,
    FlatList,
    Alert
} from 'react-native';

import { Participant } from "../../components/Participant";

import { styles } from './styles';

export function Home() {
 
    const [participants, setParticipants] = useState(['Lourenço', 'Clinton']);
    const [newParticipantName, setNewParticipantName] = useState("");

    function handleParticipantAdd() {
        if (newParticipantName.trim() === "") {
            Alert.alert("Erro", "O nome do participante não pode estar vazio.");
            return;
        }
        if(participants.includes(newParticipantName)) {
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
        }
    
        Alert.alert("Adicionar", `Adicionar o participante ${newParticipantName} ?`, [
            {
                text: 'Sim',
                onPress: () => {
                    const updatedParticipants = participants.concat(newParticipantName);
                    setParticipants(updatedParticipants);
                    setNewParticipantName("");
                    //Alert.alert("Adicionado!");
                },
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ]);
    }
    
    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => {
                    const updatedParticipants = participants.filter((participant) => {
                        return participant !== name;
                    });
                    alert("Removido!");
                    setParticipants(updatedParticipants);
                },
            },
            {
                text: 'Não',
                style: 'cancel'
            },
        ]);
    }
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.eventName}>
                APP Ventus
            </Text>
            <Text style = {styles.eventDate}>
                Sexta, 6 de novembro de 2023
            </Text>
            <View style = {styles.form}>
                <TextInput 
                    style = {styles.input}
                    value={newParticipantName}
                    onChangeText={setNewParticipantName}
                    placeholder= "Nome do Participante"
                    placeholderTextColor={"#6b6b6b"}
                />
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style = {styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>

            <FlatList 
                data={participants}
                keyExtractor= { item=> item}
                renderItem={({item}) => (
                    <Participant 
                        key={item}
                        name = {item} 
                        onRemove={()=>handleParticipantRemove(item)}
                    />
                ) }
                showsVerticalScrollIndicator= {false}
                ListEmptyComponent = { () => (
                    <Text style ={styles.listEmptyText}>
                        Ninguém chegou no evento ainda ? Adicione Participantes a lista de presença
                    </Text>
                )}
            />
        </View>    
    )
}