import React, { useContext, useState } from 'react';
import { Button, Text, ScrollView, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [affiliation, setAffiliation] = useState("");
    const [office, setOffice] = useState("");
    const [dept, setDept] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { isLoading, register } = useContext(AuthContext);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Spinner visible={isLoading} />
            <Text style={styles.title}> Sign Up </Text>
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Enter email"
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    value={firstName}
                    placeholder="Enter First Name"
                    onChangeText={(text) => setFirstName(text)}
                />
                <TextInput
                    style={styles.input}
                    value={middleName}
                    placeholder="Enter Middle Name"
                    onChangeText={(text) => setMiddleName(text)}
                />
                <TextInput
                    style={styles.input}
                    value={lastName}
                    placeholder="Enter Last Name"
                    onChangeText={(text) => setLastName(text)}
                />
                <TextInput
                    style={styles.input}
                    value={age}
                    placeholder="Enter Age"
                    onChangeText={(text) => setAge(text)}
                />
                <TextInput
                    style={styles.input}
                    value={birthdate}
                    placeholder="Enter Birthdate"
                    onChangeText={(text) => setBirthdate(text)}
                />
                <TextInput
                    style={styles.input}
                    value={contactNumber}
                    placeholder="Enter Contact Number"
                    onChangeText={(text) => setContactNumber(text)}
                />
                <TextInput
                    style={styles.input}
                    value={idNumber}
                    placeholder="Enter ID Number"
                    onChangeText={(text) => setIdNumber(text)}
                />
                <TextInput
                    style={styles.input}
                    value={affiliation}
                    placeholder="Enter an Affiliation"
                    onChangeText={(text) => setAffiliation(text)}
                />
                <TextInput
                    style={styles.input}
                    value={office}
                    placeholder="Enter an Office"
                    onChangeText={(text) => setOffice(text)}
                />
                <TextInput
                    style={styles.input}
                    value={dept}
                    placeholder="Enter Department"
                    onChangeText={(text) => setDept(text)}
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Enter password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    value={confirmPassword}
                    placeholder="Confirm password"
                    onChangeText={(text) => setConfirmPassword(text)}
                    secureTextEntry
                />
                <Button
                    title="Register"
                    onPress={() => {
                        register(email, firstName, middleName, lastName, age, birthdate, contactNumber, affiliation, office, dept, confirmPassword, password);
                    }}
                />

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.link}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 500,
    },
    wrapper: {
        width: '80%',
        paddingBottom: 100, // Add padding at the bottom for scrolling
        paddingTop: 50, // Add padding at the bottom for scrolling
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue',
    },
});

export default RegisterScreen;
