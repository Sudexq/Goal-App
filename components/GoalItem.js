import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#000066" }}
          onPress={props.deleteGoalProp.bind(this, props.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
      <View style={styles.noteForDeleting}>
        <Text style={styles.noteForDeletingText} >You can delete the goal by clicking on it.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, // Tüm ekranı kaplaması için
  },
  goalItem: {
    backgroundColor: "blue",
    margin: 5,
    borderRadius: 10,
  },
  goalText: {
    color: "#fff",
    fontSize: 16,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  noteForDeleting:{
    bottom: 5, // Ekranın altına 10 birim boşluk bırak
    width: '100%', // Ekranın tamamını kaplasın
  },
  noteForDeletingText:{
    color:"gray",
    fontSize:10,
    textAlign:"center",
  }
});
