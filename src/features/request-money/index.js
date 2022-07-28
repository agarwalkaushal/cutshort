import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CIRCLES, LEFT_CHEVRON } from '../../assets/images';
import Bottomsheet from '../../common/components/bottomsheet';
import Button from '../../common/components/button';
import { COLOR_010A43, COLOR_1DC7AC, COLOR_464E8A, COLOR_FF2E63, COLOR_FFFFFF } from '../../constants/color-constants';
import { BACK, SEND_MONEY } from '../../constants/text-constants';
import { scaleSize, WINDOW_WIDTH } from '../../utils/scales';
import styles from './styles';
import { contacts } from './temp';

export default function RequestMoney({ navigation }) {

    const [borderColor, setBorderColor] = useState(COLOR_464E8A)

    const [data, setData] = useState()
    const [name, setName] = useState()
    const [activeIndex, setActiveIndex] = useState()
    const [activeItem, setActiveItem] = useState()

    const backPress = () => {
        navigation.goBack()
    }

    const onFocus = () => {
        setBorderColor(COLOR_1DC7AC)
    }

    const onBlur = () => {
        setBorderColor(COLOR_464E8A)
    }

    const handleSearch = text => {
        //see text when clearing not working
        const newData = contacts.filter(item => {
            const itemData = item.name.toUpperCase()
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setData(newData.slice(0, 6));
        setName(text);
    };

    const onContactPress = (item, index) => {
        setActiveIndex(index)
        setActiveItem(item)
    }

    const renderResult = ({ item, index }) => {
        let extraStyle
        let horizontalAdjustment
        let verticalAdjustment
        if (index === 0) {
            verticalAdjustment = index === activeIndex ? scaleSize(18) : scaleSize(0)
            horizontalAdjustment = scaleSize(48)
            extraStyle = { marginTop: scaleSize(27) - verticalAdjustment, alignSelf: 'flex-start', position: 'absolute', left: WINDOW_WIDTH / 2 - horizontalAdjustment }
        } else if (index === 1) {
            verticalAdjustment = index === activeIndex ? scaleSize(18) : scaleSize(0)
            horizontalAdjustment = scaleSize(38)
            extraStyle = { marginTop: scaleSize(80) - verticalAdjustment, alignSelf: 'flex-start', position: 'absolute', left: scaleSize(57) - horizontalAdjustment }
        } else if (index === 2) {
            verticalAdjustment = index === activeIndex ? scaleSize(18) : scaleSize(0)
            horizontalAdjustment = scaleSize(48)
            extraStyle = { marginTop: scaleSize(116) - verticalAdjustment, alignSelf: 'flex-start', position: 'absolute', right: scaleSize(52) - horizontalAdjustment }
        } else if (index === 3) {
            verticalAdjustment = index === activeIndex ? scaleSize(18) : scaleSize(0)
            horizontalAdjustment = scaleSize(38)
            extraStyle = { marginTop: scaleSize(207) - verticalAdjustment, alignSelf: 'flex-start', position: 'absolute', left: scaleSize(89) - horizontalAdjustment }
        } else if (index === 4) {
            verticalAdjustment = index === activeIndex ? scaleSize(18) : scaleSize(0)
            horizontalAdjustment = scaleSize(38)
            extraStyle = { marginTop: scaleSize(238) - verticalAdjustment, alignSelf: 'flex-start', position: 'absolute', right: scaleSize(48) - horizontalAdjustment }
        } else if (index === 5) {
            verticalAdjustment = index === activeIndex ? scaleSize(18) : scaleSize(0)
            horizontalAdjustment = scaleSize(38)
            extraStyle = { marginTop: scaleSize(307) - verticalAdjustment, alignSelf: 'flex-start', position: 'absolute', left: WINDOW_WIDTH / 2 - horizontalAdjustment }
        }
        return <TouchableOpacity style={extraStyle} onPress={() => onContactPress(item, index)}>
            <View style={index == activeIndex ? styles.userPhotoContainerSelected : styles.userPhotoContainer}>
                <Image source={{ uri: item.photo }} style={index == activeIndex ? styles.userPhotoSelected : styles.userPhoto} />
            </View>
            <Text style={index == activeIndex ? styles.userNameSelected : styles.userName}>{item.name}</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR_010A43} barStyle="light-content"/>
            <View style={styles.header}>
                <TouchableOpacity style={styles.subHeader} onPress={backPress}>
                    <Image style={styles.navButton} source={LEFT_CHEVRON} />
                    <Text style={styles.back}>{BACK}</Text>
                </TouchableOpacity>
                <TextInput
                    onBlur={() => onBlur()}
                    onFocus={() => onFocus()}
                    onChangeText={(value) => { handleSearch(value) }}
                    value={name}
                    placeholder="enter name"
                    style={[styles.searchBar, { borderColor }]}
                    keyboardType="default"
                    autoFocus={true}
                />
            </View>
            <ImageBackground source={CIRCLES} style={styles.imageBg}>
                <FlatList
                    keyExtractor={(item, index) => `_${index}`}
                    data={data}
                    renderItem={renderResult}
                    bounces={false}
                />
            </ImageBackground>
            {activeItem && <Bottomsheet>
                <ScrollView contentContainerStyle={styles.bottomsheetView}>
                    <Image source={{ uri: activeItem.photo }} style={styles.bottomsheetPhoto} />
                    <Text style={styles.bottomsheetName}>{activeItem.name}</Text>
                    <Text style={styles.bottomsheetNumber}>{activeItem.number}</Text>
                    <Button text={SEND_MONEY} onPress={() => { }} textColor={COLOR_FFFFFF} borderColor={COLOR_FF2E63} bgColor={COLOR_FF2E63} />
                </ScrollView>
            </Bottomsheet>}
        </View>
    );
}