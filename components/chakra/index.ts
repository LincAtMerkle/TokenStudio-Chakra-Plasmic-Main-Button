import {
  Button,
  ButtonGroup,
} from "@chakra-ui/react";



import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Registerable } from "./registerable";
import { buttonGroupMeta, buttonMeta } from "./registerButton";
import { registerChakraDocs } from "./tokenSheets/registerChakraDocs"
import { registerChakraProvider } from "./registerChakraProvider";

export * from "./registerable";
export * from "./registerButton";
export * from "./registerChakraProvider";



export function registerAllChakra(loader?: Registerable) {
  const _registerComponent = <T extends React.ComponentType<any>>(
    Component: T,
    defaultMeta: ComponentMeta<React.ComponentProps<T>>
  ) => {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };
  registerChakraProvider(loader);

  _registerComponent(Button, buttonMeta);
  _registerComponent(ButtonGroup, buttonGroupMeta);
}
