import { SwatchLineHeights } from "./SwatchLineHeights";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchLineHeights() {
  registerComponent(SwatchLineHeights, {
    name: "SwatchLineHeights",
    importPath: "./components/custom/tokenSheets/SwatchLineHeights",
    props: {
      lineHeights: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
