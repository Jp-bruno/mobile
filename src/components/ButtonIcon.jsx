import { TouchableOpacity } from "react-native";
import { useTheme } from "native-base";

export default function ButtonIcon({ icon: Icon, ...rest }) {
  const { colors, sizes } = useTheme();

  return (
    <TouchableOpacity {...rest}>
      <Icon color={colors.gray[300]} size={sizes[6]} />
    </TouchableOpacity>
  );
}