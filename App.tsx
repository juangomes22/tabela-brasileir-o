import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import TeamEntity from './src/entities/team_entity';

const table: TeamEntity[] = [
  {
    id: 1,
    position: 1,
    team_name: 'Vasco',
    team_points: 58,
    team_shield_url: "https://dreamleaguesoccer.com.br/wp-content/uploads/2017/04/vasco-escudo.png"
  },
  {
    id: 2,
    position: 2,
    team_name: 'Flamengo',
    team_points: 43,
    team_shield_url:"https://i.imgur.com/cTT7IkM.png"
  },
  {
    id: 3,
    position: 3,
    team_name: 'Botafogo',
    team_points: 42,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/10/Botafogo-Escudo.png"
    
  },
  {
    id: 4,
    position: 4,
    team_name: 'Santos',
    team_points: 41,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-santos.png"
    
  },
  {
    id: 5,
    position: 5,
    team_name: 'Corinthians',
    team_points: 38,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/11/escudo-Corinthians.png"
    
  },
  {
    id: 6,
    position: 6,
    team_name: 'São Paulo',
    team_points: 36,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/11/São-Paulo-Escudo.png"
    
  },
  {
    id: 7,
    position: 7,
    team_name: 'Palmeiras',
    team_points: 33,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/11/palmeiras-escudo.png"
    
  },
  {
    id: 8,
    position: 8,
    team_name: 'Cruzeiro',
    team_points: 32,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/Logo_Cruzeiro.png"
    
  },
  {
    id: 9,
    position: 9,
    team_name: 'Fluminense',
    team_points: 31,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/10/Fluminense-Escudo.png"
    
  },
  {
    id: 10,
    position: 10,
    team_name: 'Cuiaba',
    team_points: 30,
    team_shield_url:"https://i.imgur.com/RaUjAdX.png"
    
  },
  {
    id: 11,
    position: 11,
    team_name: 'Atletico Mineiro',
    team_points: 28,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/11/Atletico-Mineiro-escudo.png"
    
  },
  {
    id: 12,
    position: 12,
    team_name: 'internacional',
    team_points: 27,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/10/Internacional-escudo.png"
    
  },
  {
    id: 13,
    position: 13,
    team_name: 'Coritiba',
    team_points: 26,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/10/Coritiba-escudo.png"
    
  },
  {
    id: 14,
    position: 14,
    team_name: 'Grê mio',
    team_points: 25,
    team_shield_url:"https://dreamleaguesoccer.com.br/wp-content/uploads/2016/10/grêmio-escudo.png"
    
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabela Brasileirão Assaí série A</Text>
      
      <View style={styles.table}>
        <FlatList
          data={table}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(team) =>
            <View style={styles.item}>
              <Image style={styles.team_shield} source={{ uri: team.item.team_shield_url }} />
              <Text style={styles.team_position}>{team.item.position}</Text>
              <Text style={styles.team_name}>{team.item.team_name}</Text>
              <Text>{team.item.team_points}</Text>
            </View>
          }

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 16,
    marginHorizontal: 16
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 16
  },
  table: {
    flex: 1,
    backgroundColor: '#ccc',
    width: '100%',

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
    paddingTop: 16

  },
  team_shield: {
    width: 20,
    height: 20
  },
  team_name:{
    width: 150,
    textAlign: 'center'
  },
  team_position:{
    width: 20
  }
})
