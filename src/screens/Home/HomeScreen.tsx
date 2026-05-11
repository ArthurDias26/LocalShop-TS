import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import LojaCard from '../../components/LojaCard';
import { useLojas } from '../../hooks/useLoja';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';


import { styles } from './StyleHome';

export default function HomeScreen() {

  const {lojas, loading} = useLojas();

  if (loading) return <ActivityIndicator size="large" color="#27ae60"/>

  type NavigationProp = StackNavigationProp<RootStackParamList, "Nome">
  

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text>+ Criar</Text>
      </TouchableOpacity>
      
      <Text style={styles.headerTitle}>Lojas Próximas</Text>
      <FlatList
        data={lojas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LojaCard loja={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}