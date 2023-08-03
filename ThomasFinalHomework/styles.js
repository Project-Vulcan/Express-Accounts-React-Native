import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
homeSscreen : { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "firebrick" },

SettingsScreen : { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "thistle" },

textboxOn: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#00FF00',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textboxOff: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 6,
    backgroundColor: '#ff6347',
    color: '#C0F20A',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }


})