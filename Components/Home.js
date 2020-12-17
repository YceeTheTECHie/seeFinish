import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, ActivityIndicator, Text, View, Image } from 'react-native';
import logo from '../assets/robo.png';
import Welcome from '../Components/Welcome' 
import Action from '../Components/Action'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            component: <Welcome />
        }
    }


    componentDidMount() {

        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            this.setState({ component: <Action /> })
        }, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle);
    }

    render() {
        return (
            this.state.component
        );
    
    }

}