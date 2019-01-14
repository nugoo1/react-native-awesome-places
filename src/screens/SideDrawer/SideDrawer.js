import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
    render() {
        return (
            <View style={[styles.container,
            {width: Dimensions.get("window").width * 0.8}]}>
                <TouchableOpacity>
                    <View style={styles.drawerItem}>
                        <Icon size={30} 
                        name={Platform.OS === "android" ? "md-log-out" : "ios-log-out"}
                        style={styles.drawerItemIcon} />
                        <Text style={styles.text}>Sign Out</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "white"
    },
    drawerItem: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#eee"
    },
    drawerItemIcon: {
        padding: 5,
        paddingRight: 20
    }
});

export default SideDrawer;