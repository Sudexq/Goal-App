import { View, FlatList, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalImput from "./components/GoalImput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    if (!enteredGoalText) return;
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    cancelAddGoalHandler(); //yeni goal eklendiğindee add new goal butonuna geri dönecek
  }
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.key != id); //return etmesi çok önemli!!!
    });
  };
  /* filter ın içine bir fonsiyon yazıyoruz ve ona göre filtreleniyor
Burada, her goal öğesi için goal.key !== id koşulu kontrol edilir:
Eğer goal.key değeri id değerine eşit değilse, bu öğe yeni listeye eklenir.
Eğer eşitse, bu öğe filtrelenmiş olur ve yeni listede yer almaz. */

  const addNewGoalHandler = () => {
    setIsModalVisible(true); //modal sayfası açılacak
  };

  const cancelAddGoalHandler = () => {
    setIsModalVisible(false); //modal sayfası kapanacak add new goal butonuna geri dönülecek
  };

  return (
    <>
      <StatusBar style="dark" />
      {/* durum çubuğunu gösteriyor şarj falan */}
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={addNewGoalHandler}
          color="darkblue"
        ></Button>
        <GoalImput
          visible={isModalVisible}
          addGoalProp={addGoalHandler}
          cancelProp={cancelAddGoalHandler}
        />
        {/* visible proptur ve isModalVisible true olunca GoalImput çalışır */}
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.key}
                  text={itemData.item.text}
                  deleteGoalProp={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
  },
  goalContainer: {
    flex: 6,
  },
});
