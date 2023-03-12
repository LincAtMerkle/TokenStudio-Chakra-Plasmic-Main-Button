import { SwatchDimension } from "./SwatchDimension";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchDimension() {
  registerComponent(SwatchDimension, {
    name: "SwatchDimension",
    importPath: "./components/custom/tokenSheets/SwatchDimension",
    props: {
      dimension: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
