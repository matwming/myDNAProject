import {Alert} from 'react-native';

const MyAlert = ({
  title,
  msg,
  hasCancel,
  hasOK,
}: {
  title: string;
  msg: string;
  hasCancel?: boolean;
  hasOK?: boolean;
}) => {
  const buildBtns = () => {
    const defaultBtn = {};
    if (hasCancel) {
      Object.assign(defaultBtn, {
        text: 'Cancel',
        onPress: () => console.log('cancel button is pressed'),
        style: 'cancel',
      });
    }
    if (hasOK) {
      Object.assign(defaultBtn, {
        text: 'OK',
        onPress: () => console.log('ok button is pressed'),
      });
    }
    return defaultBtn;
  };
  const defaultAlert = () => {
    return Alert.alert(title, msg, [buildBtns()]);
  };
  return defaultAlert();
};

export default MyAlert;
