import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalImput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    //text giriliyor o texti tutuyoruz
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (!enteredGoalText) return;
    props.addGoalProp(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goalImage.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="your goals"
          value={enteredGoalText}
        />
        <View style={styles.InputButtons}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="blue"/>
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={props.cancelProp} color="red"></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalImput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "column", //öğelerin yan yana gelmesini sağlıyor //zaten default //yazmaya gerek yok
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,

    borderRadius: 20,
  },
  InputButtons: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 150,
    height: 150,
  },
});
