import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    textInput: {
        height: 65,
        borderWidth: 2,
        borderColor: '#e5e7eb',
        padding: 8,
        paddingLeft: 56,
        width: '80%',
        borderRadius: 12,
        fontSize: 22,
    },
    topScreen: {
        width: '100%',
        height: 300,
        backgroundColor: '#3b82f6',
    },
    topScreenBox: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        flex: 1,
    },
    slogoText: {
        color: 'rgba(223, 228, 248, 1)'
    },
    iconBox: {
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 75,
        borderRadius: "50%",
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    titleBox: {
        alignItems: 'center',

    },
    mainText: {
        color: 'rgb(31 41 55)',
        fontSize: 44,
        fontWeight: "700",

    },
    bottomScreen: {
        paddingTop: 30,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        gap: 30
    },
    inputBox: {
        width: '100%',
        alignItems: 'center',
        gap: 20,
    },
    signUpButton: {
        width: "80%",
        borderRadius: 12,
        height: 65,
        backgroundColor: '#3b82f6',
        shadowColor: '#3b82f6',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: "550"
    },
    iconOuter: {
        alignItems: 'center',
        width: "100%",
        justifyContent: 'center'
    },
    inputIcon: {
        position: 'absolute',
        left: '15%'
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#cbd5e1',
    },
    orText: {
        marginHorizontal: 10,
        color: '#64748b',
        fontWeight: '600',
    },
    bottomTextButton: {
        color: '#3b82f6',
    },
    codeText: {
        fontSize: '18',
        fontWeight: '500',
        color: 'rgb(107 114 128)'
    },
    verifyBox: {
        width: '13%',
        height: 65,
        borderWidth: 2,
        borderColor: '#e5e7eb',
        padding: 8,
        borderRadius: 12,
        fontSize: 28,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#3b82f6',
    },
    verifyOuter: {
        width: '100%',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },

});