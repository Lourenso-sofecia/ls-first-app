import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems:'center',
        marginBottom: 10,

    },
    name: {
        flex: 1,
        paddingLeft: 12,
        fontSize: 16,
        color: '#fff',
    },
    button: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#e23c44',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24,
    },
    
});