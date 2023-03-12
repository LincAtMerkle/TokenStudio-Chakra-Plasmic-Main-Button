import { SwatchBoxShadow } from "./SwatchBoxShadow";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchBoxShadow() {
  registerComponent(SwatchBoxShadow, {
    name: "SwatchBoxShadow",
    importPath: "./components/custom/tokenSheets/SwatchBoxShadow",
    props: {
      boxShadow: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
