import { SwatchAssets } from "./SwatchAssets";
import { registerComponent } from "@plasmicapp/host";

export function registerSwatchAssets() {
  registerComponent(SwatchAssets, {
    name: "SwatchAssets",
    importPath: "./components/custom/tokenSheets/SwatchAssets",
    props: {
      assets: {
        type: "string",
        defaultValue: "red",
      },
    },
  });
}
