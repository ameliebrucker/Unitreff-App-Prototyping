import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fontSizes = {
    extrasmall: 12,
    small: 14,
    large: 16
};

const colors = {
    lightGrey: '#BBBBBB',
    darkGrey: '#2A2E3D',
    white: '#FFFFFF',
    backgroundGrey: '#141829',
    purple: '#5952D2',
    blue: '#4B79D4',
    gradient: ['#4B79D4', '#5952D2'],
    gradientBright: ['#576AD8', '#9747FF'],
    // #2A2E3D as rgb with 0.9 opacity:
    transparentGrey: 'rgba(42, 46, 61, 0.9)',
    transparentBlack: 'rgba(0, 0, 0, 0.5)'
};

const profilePicSizes = {
    small: 32,
    medium: 50,
    large: 165,
    multiPicsSmallWidth: 61
}

const iconSizes = {
    small: 24,
    large: 33
}

const textStyles = {

    primaryBtnText:{
        color: colors.white,
        fontSize:fontSizes.large,
        fontFamily: 'Poppins-Regular'
    },
    secondaryBtnText:{
        color: colors.lightGrey,
        fontSize:fontSizes.large,
        fontFamily: 'Poppins-Regular'
    },
    pageTitleText:{
        color: colors.white,
        fontSize:fontSizes.large,
        fontFamily: 'Poppins-SemiBold'
    },
    linkedText: {
        color: colors.white,
        fontSize:fontSizes.small,
        fontFamily: 'Poppins-Medium',
        textDecorationLine: 'underline'
    },
    smallCalenderText: {
        color: colors.white,
        fontSize:fontSizes.extrasmall,
        fontFamily: 'Poppins-SemiBold'
    },
    largeCalenderText: {
        color: colors.white,
        fontSize:fontSizes.large,
        fontFamily: 'Poppins-SemiBold'
    },
    smallWhiteRegularText: {
        color: colors.white,
        fontSize:fontSizes.small,
        fontFamily: 'Poppins-Regular'
    },
    smallWhiteMediumText: {
        color: colors.white,
        fontSize:fontSizes.small,
        fontFamily: 'Poppins-Medium'
    },
    largeWhiteRegularText: {
        color: colors.white,
        fontSize:fontSizes.large,
        fontFamily: 'Poppins-Regular'
    },
    smallGreyRegularText: {
        color: colors.lightGrey,
        fontSize:fontSizes.small,
        fontFamily: 'Poppins-Regular'
    },
    smallGreyMediumText: {
        color: colors.lightGrey,
        fontSize:fontSizes.small,
        fontFamily: 'Poppins-Medium'
    }
}

const generalStyles = {
    background: {
        flex: 1,
        backgroundColor: colors.backgroundGrey,
    },
    maincontent: {
        flex: 1,
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        marginHorizontal: 27,
        justifyContent: 'space-between',
    },
    statusbar: {
        height: 24,
        backgroundColor: colors.lightGrey,
        marginBottom: 30
    },
    // entryField
    entryFieldSmall: {
        backgroundColor: colors.darkGrey,
        width: windowWidth - 40,
        height: 45,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: fontSizes.small,
        fontFamily: 'Poppins-Medium',
        color: colors.white,
        marginTop: 13
    },
    entryFieldLarge: {
        backgroundColor: colors.darkGrey,
        width: windowWidth - 40,
        height: 155,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: fontSizes.small,
        fontFamily: 'Poppins-Medium',
        color: colors.white,
        marginTop: 13,
        textAlignVertical: 'top'
    },
    // buttons
    btnLarge: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 165,
        height: 41
    },
    btnSmall: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 112,
        height: 41
    },
    primaryBtnLargeInside: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 165,
        height: 41,
    },
    secondaryBtnLargeInside: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 163,
        height: 39,
        backgroundColor: colors.darkGrey
    },
    primaryBtnSmallInside: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 112,
        height: 41,
    },
    secondaryBtnSmallInside: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 110,
        height: 39,
        backgroundColor: colors.darkGrey
    },
    backButton: {
        zIndex: 1,
        elevation: 1
    },
    icon: {
        width: iconSizes.small,
        height: iconSizes.small
    },
    // event content
    contentcontainer: {
        backgroundColor: colors.darkGrey,
        borderRadius: 15,
        width: windowWidth - 40,
        marginTop: 13,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    contentcontainerSmall: {
        backgroundColor: colors.darkGrey,
        borderRadius: 15,
        width: windowWidth - 40,
        marginTop: 13,
        paddingHorizontal: 15,
        paddingVertical: 10,
        heigth: 45
    },
    lastElementInScrollView: {
        marginBottom: 85
    },
    eventImg: {
        width: windowWidth - 40 - 30,
        height: 145,
        borderRadius: 15
    },
    informationFieldWrapper: {
        flexDirection:'row',
        flexWrap:'wrap',
        paddingTop: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    informationField: {
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems: 'center'
    },
    informationText: {
        ...textStyles.smallGreyMediumText,
        paddingLeft: 10
    },
    informationTextPadding: {
        paddingLeft: 10
    },
    // navbar
    navBarContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -10,
        alignItems: 'center'
    },
    navBar: {
        backgroundColor: colors.transparentGrey,
        borderRadius: 43,
        width: windowWidth + 34,
        paddingHorizontal: 27 + 17,
        paddingBottom: 10,
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    plusButtonNavBar: {
        position: 'absolute',
        top: -21,
        width: 49,
        height: 42
    },
    iconNavbar: {
        width: iconSizes.large,
        height: iconSizes.large
    }
}

export {
    windowHeight,
    windowWidth,
    fontSizes,
    colors,
    profilePicSizes,
    textStyles,
    generalStyles
}