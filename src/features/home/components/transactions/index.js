import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { DOWN_CHEVRON, FAILED, RECEIVED, SENT } from '../../../../assets/images';
import { COLOR_10194E, COLOR_192259, COLOR_1DC7AC, COLOR_FAAD39, COLOR_FE4A54 } from '../../../../constants/color-constants';
import { ALL_TRANSACTIONS, DROPDOWN, formatAmount, SORT_BY } from '../../../../constants/text-constants';
import { scaleSize } from '../../../../utils/scales';
import styles from './styles';
import { transactions } from './temp';

const RECEIVED_ENUM = 'RECEIVED'
const SENT_ENUM = 'SENT'
const FAILED_ENUM = 'FAILED'

export default function Transactions() {

    const renderTag = (text, icon, bgColor) => {
        return <View style={[styles.tagContainer, { backgroundColor: bgColor }]}>
            <Image source={icon} />
            <Text style={styles.tagText}>{text[0].toUpperCase() + text.slice(1, text.length).toLowerCase()}</Text>
        </View>
    }

    const renderTransaction = ({ item, index }) => {

        let icon, bgColor
        if (item.tag == RECEIVED_ENUM) {
            icon = RECEIVED
            bgColor = COLOR_1DC7AC
        }
        else if (item.tag == SENT_ENUM) {
            icon = SENT
            bgColor = COLOR_FAAD39
        }
        else if (item.tag == FAILED_ENUM) {
            icon = FAILED
            bgColor = COLOR_FE4A54
        }

        return <View style={[styles.container, { backgroundColor: index % 2 == 0 ? COLOR_192259 : COLOR_10194E }]}>
            <View style={styles.subContainer}>
                <Image source={{ uri: item.photo }} style={styles.userPhoto} />
                <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    {renderTag(item.tag, icon, bgColor)}
                </View>
            </View>
            <Text style={[styles.amount, { color: bgColor }]}>{formatAmount(item.amount)}</Text>
        </View>
    }

    const renderTransactions = () => {
        return (
            <FlatList
                keyExtractor={(item, index) => `_${index}`}
                data={transactions}
                renderItem={renderTransaction}
                bounces={false}
                contentContainerStyle={{ paddingBottom: scaleSize(70) }}
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