import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Horarios = {
    "Segunda-Feira": [
      { horario: "07:00 - 07:50", materia: "Português", professor: "Dora Lemos", color: "#1673D0"},
      { horario: "07:50 - 08:40", materia: "Redação", professor: "Walter Santos", color: "#655548"},
      { horario: "08:40 - 09:30", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
      { horario: "09:30 - 10:00", materia: "Intervalo", color: "#9D9898"},
      { horario: "10:00 - 10:50", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
      { horario: "10:50 - 11:40", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
      { horario: "11:40 - 12:30", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
      { horario: "12:30 - 13:20", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
    ],
    "Terça-Feira": [
      { horario: "07:00 - 07:50", materia: "História", professor: "José Luciano", color: "#D2969E"},
      { horario: "07:50 - 08:40", materia: "História", professor: "José Luciano", color: "#D2969E"},
      { horario: "08:40 - 09:30", materia: "Geografia", professor: "Pedro Renato", color: "#A567BC"},
      { horario: "09:30 - 10:00", materia: "Intervalo", color: "#9D9898"},
      { horario: "10:00 - 10:50", materia: "Matemática", professor: "Vitor Bezerra", color: "#E4AC7D"},
      { horario: "10:50 - 11:40", materia: "Matemática", professor: "Vitor Bezerra", color: "#E4AC7D"},
      { horario: "11:40 - 12:30", materia: "Artes", professor: "Maria de Lourde", color: "#FF8A5F"},
      { horario: "12:30 - 13:20", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
    ],
    "Quarta-Feira": [
      { horario: "07:00 - 07:50", materia: "Filosofia", professor: "Pedro Germano", color: "#D1C57B"},
      { horario: "07:50 - 08:40", materia: "Português", professor: "Danilo Melo", color: "#1673D0"},
      { horario: "08:40 - 09:30", materia: "Português", professor: "Danilo Melo", color: "#1673D0"},
      { horario: "09:30 - 10:00", materia: "Intervalo", color: "#9D9898"},
      { horario: "10:00 - 10:50", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
      { horario: "10:50 - 11:40", materia: "Geografia", professor: "Pedro Renato", color: "#A567BC"},
      { horario: "11:40 - 12:30", materia: "Matemática", professor: "Vitor Bezerra", color: "#E4AC7D"},
      { horario: "12:30 - 13:20", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
    ],
    "Quinta-Feira": [
      { horario: "07:00 - 07:50", materia: "Química", professor: "Beatriz Salgueiro", color: "#F08F42"},
      { horario: "07:50 - 08:40", materia: "", professor: "Michele Paiva", color: "#F2C824"},
      { horario: "08:40 - 09:30", materia: "Empreenda LAB", professor: "Alberto Andrade", color: "#E95B4D"},
      { horario: "09:30 - 10:00", materia: "Intervalo", color: "#9D9898"},
      { horario: "10:00 - 10:50", materia: "Literatura", professor: "Maria de Lourde", color: "#90E07F"},
      { horario: "10:50 - 11:40", materia: "Projeto de Vida", professor: "André", color: "#9DAB7A"},
      { horario: "11:40 - 12:30", materia: "Inglês", professor: "Heitor", color: "#A09D8A"},
      { horario: "12:30 - 13:20", materia: "Inglês", professor: "Heitor", color: "#A09D8A"},
    ],
    "Sexta-Feira": [
      { horario: "07:00 - 07:50", materia: "Matemática", professor: "Vitor Bezerra", color: "#E4AC7D"},
      { horario: "07:50 - 08:40", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
      { horario: "08:40 - 09:30", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF"},
      { horario: "09:30 - 10:00", materia: "Intervalo", color: "#9D9898" },
      { horario: "10:00 - 10:50", materia: "Educação Física", professor: "Marcela Figueiredo", color: "#33B9B2"},
      { horario: "10:50 - 11:40", materia: "Biologia", professor: "Letícia Santos", color: "#3BB76F"},
      { horario: "11:40 - 12:30", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF" },
      { horario: "12:30 - 13:20", materia: "Formação Profissional", professor: "Over Manuel", color: "#A8ADEF" },
    ]
  };
  
export default function HorarioScreen() {
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveDay(activeDay === day ? null : day);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Horários</Text>
      {Object.keys(Horarios).map((day) => (
        <View key={day} style={styles.dayContainer}>
          <TouchableOpacity
            onPress={() => toggleDay(day)}
            style={[
              styles.dayButton,
              activeDay === day && styles.activeDayButton,
            ]}
          >
            <Text style={[styles.dayText, activeDay === day && styles.activeDayText]}>
              {day}
            </Text>
            <Icon
              name={activeDay === day ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={20}
              color={activeDay === day ? "#FFFFFF" : "#004B8D"}
            />
          </TouchableOpacity>
          {activeDay === day && (
            <ScrollView style={styles.schedule} nestedScrollEnabled>
              {Horarios[day].map((item, index) => (
                <View
                  key={index}
                  style={[
                    styles.timeSlot,
                    { backgroundColor: item.color },
                    index === Horarios[day].length - 1 && styles.lastTimeSlot,
                  ]}
                >
                  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
                    <Icon name="access-time" size={16} color="#FFFFFF" style={{ marginRight: 5 }} />
                    <Text style={styles.timeText}>{item.horario}</Text>
                  </View>
                  <Text style={styles.subjectText}>{item.materia}</Text>
                  {item.professor && (
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <Icon name="person" size={16} color="#FFFFFF" style={{ marginRight: 5 }} />
                      <Text style={styles.teacherText}>{item.professor}</Text>
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A284B",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  dayContainer: {
    marginBottom: 20,
  },
  dayButton: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  activeDayButton: {
    backgroundColor: "#004B8D",
  },
  dayText: {
    color: "#004B8D",
    fontSize: 18,
    fontWeight: "bold",
  },
  activeDayText: {
    color: "#FFFFFF",
  },
  schedule: {
    backgroundColor: "#F0F0F0",
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  timeSlot: {
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  lastTimeSlot: {
    marginBottom: 0, // Remove margem inferior do último item
  },
  timeText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  subjectText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  teacherText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});
