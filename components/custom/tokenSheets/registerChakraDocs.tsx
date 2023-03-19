import { ChakraDocs } from "./ChakraDocs";
import { registerComponent } from "@plasmicapp/host";
import { tokenSetOrder } from "../../../theme/tokenStudioChakra/$metadata.json";

export function registerChakraDocs() {
  registerComponent(ChakraDocs, {
    name: "ChakraDocs",
    importPath: "./components/custom/tokenSheets/ChakraDocs",
    props: {
      theme: {
        type: "choice",
        // options: ["hm-light", "hm-dark"],
        options: ["light", "dark"],
        description: "Theme",
        // defaultValue: "hm-light"
        defaultValue: "light",
      },
      path: {
        // @ts-ignore
        type: "string",
        title: "Tokens path",
        description: "Tokens path",
        // @ts-ignore
        defaultValue: "btn.primary",
      },
      set: {
        type: "choice",
        options: tokenSetOrder,
        description: "Token set",
        defaultValue: "core/color",
      },
    },
  });
}
