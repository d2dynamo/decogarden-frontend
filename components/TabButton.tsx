import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";

export function TabButton(props: BottomTabBarButtonProps) {
  return <PlatformPressable>{props.children}</PlatformPressable>;
}
