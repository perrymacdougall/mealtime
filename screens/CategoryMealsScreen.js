import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Grab the Meal Deets!" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'})
            }} />
        </View>
    )
};

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;