import React from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { DOWN_CHEVRON } from '../../../../assets/images';
import { ALL_TRANSACTIONS, DROPDOWN, SORT_BY } from '../../../../constants/text-constants';
import styles from './styles';
import { transactions } from './temp';

export default function Transactions() {

    const renderTag = (text) => {
        return <Text>{text}</Text>
    }

    const renderTransaction = ({ item }) => {
        return <View>
            <Image source={{ uri: item.photo }} />
            <View>
                <Text>{item.name}</Text>
                {renderTag()}
            </View>
        </View>
    }

    const renderTransactions = () => {
        return (
            <FlatList
                keyExtractor={(item, index) => `_${index}`}
                data={transactions}
                renderItem={renderTransaction}
            />
        )
    }

    return (<View>
        <View style={styles.transactionsHeader}>
            <Text style={styles.allTransactions}>{ALL_TRANSACTIONS}</Text>
            <View style={styles.dropdownContainer}>
                <Text style={styles.sortBy}>{SORT_BY}</Text>
                <Text style={styles.dropdown}>{DROPDOWN}</Text>
                <Image source={DOWN_CHEVRON} />
            </View>
        </View>
        {renderTransactions()}
    </View>
    );
}