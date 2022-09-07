
import React, { useState, useRef } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import PagerView from 'react-native-pager-view';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Button from '../components/Button';
import Modal from 'react-native-modal';
import { style } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

export default function QrcodeScreen({ navigation }) {
  const [check, setCheck] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOpenModalPress = () => setIsModalVisible(true);
  const handleCloseModalPress = () => setIsModalVisible(false);
  const refPageview = useRef();
  const onSuccess = e => {
    console.log(e);
    handleOpenModalPress();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack }}>
          <Svg
            width={22}
            height={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M20.333 8.667H4.52l4.84-5.814a1.335 1.335 0 1 0-2.053-1.706l-6.667 8c-.045.063-.085.13-.12.2 0 .066 0 .106-.093.173-.06.153-.092.316-.094.48.002.164.033.327.094.48 0 .067 0 .107.093.173.035.07.075.137.12.2l6.667 8a1.333 1.333 0 0 0 1.026.48 1.333 1.333 0 0 0 1.027-2.186l-4.84-5.814h15.813a1.333 1.333 0 1 0 0-2.666Z"
              fill="#141414"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={styles.text}>
          QR Code Scan
        </Text>
      </View>
      <View style={styles.buttongroup}>
        <TouchableOpacity style={(check ? styles.scan : styles.show)} onPress={() => { if (!check) { refPageview.current?.setPage(0); setCheck(true) } }}>
          <Text style={check ? styles.earn : styles.showtext}>Scan a QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={(!check ? styles.scan : styles.show)} onPress={() => { if (check) { refPageview.current?.setPage(1); setCheck(false) } }}>
          <Text style={!check ? styles.earn : styles.showtext}>Show your QR</Text>
        </TouchableOpacity>
        {/* <Text style={styles.spent}>Show your QR</Text> */}
      </View>
      <PagerView scrollEnabled={false} ref={refPageview} style={styles.pagerView} initialPage={0}>
        <View key="1">
          <QRCodeScanner
            containerStyle={{ marginTop: 50, }}
            onRead={onSuccess}
            cameraProps={{ ratio: "1:1" }}
            cameraStyle={{ overflow: 'hidden', borderRadius: 10, height: 280, width: 280, alignSelf: 'center', justifyContent: 'flex-start' }}
          />
          <Text style={styles.pleaseqr}>
            Place the QR Code inside of the frame
          </Text>
          <Text style={styles.description}>
            Once successfully scanned the user will show here
          </Text>
        </View>
        <View key="2">
          <View style={styles.qrcode}>
            <QRCode
              style={{ borderRadius: 20 }}
              value="John Doe’s QR Code"
              size={200}
              color={theme.colors.whiteColor}
              backgroundColor={theme.colors.qrcodeColor}
            />
          </View>
          <Text style={styles.mycode}>
            John Doe’s QR Code
          </Text>
          <Text style={styles.description}>
            Scan the QR Code to send John a payment
          </Text>
        </View>
      </PagerView>
      <Modal isVisible={isModalVisible} hasBackdrop={true} >
        <View style={styles.modal}>
          <View style={styles.modalmain}>
            <TouchableOpacity onPress={() => { handleCloseModalPress() }} style={{ paddingHorizontal: 19, position: 'absolute', paddingTop: 19 }}>
              <Svg
                width={14}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M13.73 14.03a1.097 1.097 0 0 1-.15 1.583 1.19 1.19 0 0 1-.745.261 1.18 1.18 0 0 1-.897-.405L7 9.726 2.063 15.44c-.23.267-.562.405-.896.405a1.19 1.19 0 0 1-.746-.26 1.097 1.097 0 0 1-.15-1.585l5.21-6.03-5.21-5.998A1.097 1.097 0 0 1 .42.387 1.194 1.194 0 0 1 2.063.53L7 6.242 11.936.53A1.196 1.196 0 0 1 13.58.385c.495.398.562 1.107.15 1.585l-5.21 6.029 5.211 6.03Z"
                  fill="#121244"
                />
              </Svg>
            </TouchableOpacity>
            <View>
              <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
              <Text style={styles.name}>
                Change Profile Picture
              </Text>
              <Text style={styles.greyid}>
                @lisabenson94
              </Text>
            </View>
          </View>
          <Button onPress={handleCloseModalPress} color={theme.colors.backgroundColor} style={[styles.mannual]}>
            <Text style={[styles.bttext, { paddingHorizontal: 50 }]}>
              Confirm
            </Text>
          </Button>
        </View>
      </Modal>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteColor,
    paddingTop: 45,
  },
  header: {
    marginLeft: 30,
    marginRight: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: theme.colors.backgroundColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.normal,
  },
  mycode: {
    marginVertical: 10,
    width: '100%',
    textAlign: 'center',
    color: theme.colors.backgroundColor,
    fontSize: theme.fontSize.subtitle1,
    fontWeight: theme.fontWeight.normal,
  },
  buttongroup: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 50,
    position: 'relative',
    height: 39,
    borderRadius: 20,
    backgroundColor: 'rgba(198, 161, 90, 0.33)',
    display: 'flex',
    flexDirection: 'row'
  },
  scan: {
    width: '50%',
    height: 39,
    borderRadius: 20,
    backgroundColor: 'rgba(198, 161, 90, 0.33)',
    color: theme.colors.blackColor,
  },
  show: {
    width: '50%',
    height: 39,
    borderRadius: 20,
    color: 'rgba(198, 161, 90, 0.33)'
  },
  pagerView: {
    flex: 1,
  },
  earn: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: theme.colors.whiteColor
  },
  showtext: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: theme.colors.greytextColor
  },
  spent: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '50%',
  },
  avatar: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  pleaseqr: {
    marginVertical: 10,
    fontSize: theme.fontSize.content,
    textAlign: 'center'
  },
  qrcode: {
    marginTop: 50,
    backgroundColor: theme.colors.qrcodeColor,
    padding: 40,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  description: {
    width: '80%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.greytextColor,
    shadowColor: theme.colors.blackColor,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 20,
      width: 20
    }
  },
  qrcodecamera: {
    height: 50,
  },
  modal: {
    width: '88%',
    position: 'absolute',
    bottom: 70,
    height: 200,
    marginLeft: '6%',
    borderRadius: 15,
  },
  modalmain: {
    backgroundColor: theme.colors.whiteColor,
    height: 180,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: theme.colors.greytextColor
  },
  modalbutton: {

  },
  mannual: {
    position: 'absolute',
    marginLeft: '10%',
    bottom: 0,
    width: '80%',
    borderColor: theme.colors.yellowtextColor,
    backgroundColor: theme.colors.yellowtextColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  bttext: {
    color: theme.colors.backgroundColor,
    textAlign: 'center',
    fontWeight: theme.fontWeight.bold,
    fontSize: 18,
    lineHeight: 22,
  },
  name: {
    textAlign: 'center',
    color: theme.colors.blackColor,
    marginVertical: 5,
    fontSize: theme.fontSize.content0,
    fontWeight: theme.fontWeight.bold,
  },
  greyid: {
    textAlign: 'center',
    color: theme.colors.greytextColor,
    marginVertical: 5,
    fontSize: theme.fontSize.content,
    fontWeight: theme.fontWeight.bold,
  },
});
