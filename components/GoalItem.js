import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      android_ripple={{ color: '#210644' }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white',
    textAlign: 'center',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
