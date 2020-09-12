import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThList, faTh } from "@fortawesome/free-solid-svg-icons";
import { styles } from "./contactsHeader.style";
import { globalStyles } from "../../../../styles/global";

const ContactsHeader = () => {
  return (
    <View style={styles.box}>
      <Text style={globalStyles.font18}>Contacts</Text>
      <View style={styles.buttonsGroup}>
        <TouchableHighlight style={styles.button}>
          <FontAwesomeIcon icon={faThList} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <FontAwesomeIcon icon={faTh} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default ContactsHeader;
