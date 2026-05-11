import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        paddingHorizontal: 20,
        paddingTop: 40,
    },

    scrollContent: {
        paddingBottom: 40,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 30,
        textAlign: 'center',
    },

    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 8,
        marginTop: 15,
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#CBD5E1',
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#0F172A',
    },

    button: {
        width: '100%',
        height: 55,
        backgroundColor: '#2563EB',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default styles