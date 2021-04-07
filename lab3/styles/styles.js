import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#add8e6",
    padding: 10,
    width: 100,
    marginTop: 0,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 4,
  },
  buttonClear: {
    backgroundColor: "#add8e6",
    alignItems: "center",
    padding: 10,
    width: 150,
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  storageBtn: {
    alignItems: "center",
    backgroundColor: "#fa3a3a",
    padding: 10,
    width: 210,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 4,
    marginTop: 20,
  },
  showStorageBtn: {
    backgroundColor: "#16f083",
    alignItems: "center",
    padding: 10,
    width: 210,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 4,
    marginTop: 40,
    marginBottom: 20,
  },
  storageText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
