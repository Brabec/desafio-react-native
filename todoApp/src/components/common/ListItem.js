import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { CardSection } from './';

const ListItem = ({ data }) => {
    return (
        <FlatList 
            style={styles.listStyle}
            data={data}
            renderItem={({ item }) =>
            <CardSection>
                <Text>
                    {`${item.name}\n${item.description}\n${item.date}\n${item.dueDate}`}
                </Text>
            </CardSection>
            }
        />
    );
};

export { ListItem };

const styles = StyleSheet.create({
    listStyle: {
        padding: 10,
        fontSize: 20,
    }
});
