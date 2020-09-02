import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#445961',
  },
    
  header: {
    backgroundColor: '#1c2b31',
    marginBottom: 15
  },

  titles: {
    backgroundColor: "#212830",
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
  },

  textTitle: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#ffffff',
    fontFamily: "JosefinSans-Regular",
  },

  subcat: {
    backgroundColor: '#3c404c',
    borderColor: '#3c404c',
    borderBottomColor: '#ffffff',
    borderWidth: 1,
  },

  textSubcat: {
    color: '#ffffff',
    paddingLeft: 30,
    fontSize: 25,
    marginTop: 15,
    fontFamily: "SairaCondensed-Regular",
  },

  mais: {
    color: '#ffffff',
    marginRight: 30,
    alignSelf: 'flex-end',
    fontSize: 50,
    marginTop: -55,
  },

  button: {
    marginLeft: 145,
    marginTop: 5,
    width: 100,
    height: 50,
    backgroundColor: '#FF0000',
  }
});

export default styles;