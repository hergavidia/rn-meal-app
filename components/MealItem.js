import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedbackComponent,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{ props.duration}m</Text>
            <Text>{ props.complexity}</Text>
            <Text>{ props.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealHeader: {
    height: '90%'
  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  mealItem: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5'
  },
  mealRow: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'open-sans-bold',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  }
});

export default MealItem;
