import React from 'react';
import { useCadastroLoja } from '../../hooks/useCadastroLoja';
import { Platform, KeyboardAvoidingView, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './CadastroLojaStyle';

export default function cadastroLoja() {
    const {formData, updateField, handleSalvar} = useCadastroLoja()
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView contentContainerStyle={styles.scrollContent}>

            <Text style={styles.title}>Cadastrar Local</Text>

            <Text style={styles.label}>Nome do Local *</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: Café Central'
                value={formData.nome}
                onChangeText={(v) => updateField('nome', v)}
            />

            <Text style={styles.label}>Categoria *</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: Lanchonete'
                value={formData.categoria}
                onChangeText={(v) => updateField('categoria', v)}
            />

            <Text style={styles.label}>Imagem *</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: https://'
                value={formData.imagem}
                onChangeText={(v) => updateField('imagem', v)}
            />

            <Text style={styles.label}>Distancia *</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: 200m'
                value={formData.distancia}
                onChangeText={(v) => updateField('distancia', v)}
            />

            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder='Ex: Link'
                value={formData.descricao}
                onChangeText={(v) => updateField('descricao', v)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                <Text style={styles.buttonText}>Salvar Local</Text>
            </TouchableOpacity>
        </ScrollView>

    </KeyboardAvoidingView>
  );
}