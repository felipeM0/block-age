import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  vwContentSpace: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'rgba(51,51,51,0.5)',
  },
  iconSelectedDel: {
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: -0.5, height: 0.5},
    textShadowRadius: 2,
  },
  vwContentIcon: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  vwOnlySpace: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 0,
    top: 0,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tcbRemove: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 9,
  },
  TextTitle: (props) => ({
    fontSize: 15,
    fontWeight: 'bold',
    opacity: props.title == '' ? 0.2 : 1,
    color:
      props.bgc != '#474747' && props.bgc != '#000000' ? '#333' : '#FFFFFF',
  }),
  TouchTask: (props) => ({
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: props.bgc,
    padding: 10,
    paddingBottom: 33,
    elevation: 5,
  }),
  data: {
    backgroundColor: '#333',
    position: 'absolute',
    padding: 2,
    paddingRight: 5,
    paddingLeft: 5,
    color: '#FFFFFF',
    fontSize: 9,
    borderRadius: 5,
    right: 10,
    bottom: 10,
    textAlign: 'center',
    elevation: 5,
  },
  qnt: {
    right: 110,
  },
  btnShare: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#009dff',
    padding: 15,
    margin: 10,
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  btnDel: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ff0000',
    padding: 15,
    margin: 10,
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  txtShare: {
    fontWeight: 'bold',
    color: '#009dff',
  },
  txtDel: {
    fontWeight: 'bold',
    color: '#ff0000',
  },
  box: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51,51,51,0.8)',
  },
  boxBody: {
    width: '90%',
    height: 200,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  vwDone: {
    height: 17,
    width: 16.5,
    elevation: 4,
    position: 'absolute',
    right: 8,
    top: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#333',
  },
  txtCont: (cor) => ({
    color: cor != '#474747' && cor != '#000000' ? 'rgb(59,59,59)' : '#FFFFFF',
  }),
});
