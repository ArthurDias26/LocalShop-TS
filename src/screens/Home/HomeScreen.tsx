import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import LojaCard from '../../components/LojaCard';
import { useLojas } from '../../hocks/useLoja';

import { styles } from './StyleHome';

export default function HomeScreen() {

  const {lojas, loading} = useLojas();

  if (loading) return <ActivityIndicator size="large" color="#27ae60"/>

  return (
    <View style={styles.container}>
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