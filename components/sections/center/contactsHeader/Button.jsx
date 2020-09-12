import React from "react";
import { observer } from "mobx-react-lite";
import { TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useStore } from "../../../../models/rootModel";
import { styles } from "./contactsHeader.style";
import colors from "../../../../styles/colors";

const Button = ({ icon, type }) => {
  const store = useStore();

  const active = store.getView() === type;

  return (
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor={colors.white}
      style={[
        styles.button,
        {
          backgroundColor: active ? colors.main : colors.white,
        },
      ]}
      onPress={() => store.setViewType(type)}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          color: active ? colors.white : colors.black,
        }}
      />
    </TouchableHighlight>
  );
};

export default observer(Button);
