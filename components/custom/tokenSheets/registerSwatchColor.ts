import { SwatchColor } from "./SwatchColor";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchColor() {
  registerComponent(SwatchColor, {
    name: "SwatchColor",
    importPath: "./components/custom/tokenSheets/SwatchColor",
    props: {
      color: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
