import React from 'react';
import Svg, { Text, TSpan, Path } from 'react-native-svg';
import { View } from 'react-native';

const BookBashLogo = ({ width = 300, height = 70, colour1, colour2 }) => {

    return (
        <View style={{ width, height }}>
            <Svg width="100%" height="100%" viewBox="0 0 300 70">

                <Text
                    x="10"
                    y="50"
                    fontFamily="Verdana"
                    fontSize="48"
                    fontWeight="700"
                    fill={colour1}
                    letterSpacing="-1"
                >
                    BOOK
                </Text>


                <Text
                    x="160"
                    y="50"
                    fontFamily="Verdana"
                    fontSize="48"
                    fontWeight="500"
                    fill={colour2}
                    letterSpacing="-1"
                >BASH
                </Text>


            </Svg>
        </View>
    );
};

export default BookBashLogo;