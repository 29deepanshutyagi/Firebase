import React from 'react';
import {View, text} from 'react-native';

const Header = (props) => {
    return (
        <View style={{marginLeft:15 }}>
            <Text style={{fontweight:'bold',fontSize:28}}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Header;
