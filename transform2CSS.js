const fs = require("fs");
const _ = require("lodash");
const StyleDictionary = require("style-dictionary");
const { registerTransforms } = require("@tokens-studio/sd-transforms");

console.log("Build started...");
console.log("\n==============================================");

const tokenTypes = {
  color: "colors",
  borderRadius: "radii",
  fontFamilies: "fonts",
  fontWeights: "fontWeights",
  spacing: "space",
  lineHeights: "lineHeights",
  sizing: "sizes",
  borderWidth: "borders",
  fontSizes: "fontSizes",
};

registerTransforms(StyleDictionary);

/**
 * Format for chakra json
 */
StyleDictionary.registerFormat({
  name: "json/variables",
  formatter: function (dictionary) {
    let result = "{";
    Object.keys(tokenTypes).forEach(function (key) {
      result += `\n  "${tokenTypes[key]}": {`;
      dictionary.allProperties.map((props) => {
        if (props.type === key) {
          result += `\n    "${props.name}": "${props.value}",`;
        }
      });
      if (result[result.length - 1] === ",")
        result = result.slice(0, result.length - 1);
      result += `\n  },`;
    });
    result = result.slice(0, result.length - 1);
    result += "\n}";
    return result;
  },
});

// function convertToVariableIfNeeded(value) {
//   if (value.startsWith("{") && value.endsWith("}")) {
//     return `var(${value.slice(1, -1).replace(".", "-")})`;
//   }
//   return value;
// }

/**
 * Format for css typography classes
 * This generates theme-independent css classes so we're fine with just using css variables here
 * We're using the css shorthand to define the font: property and define all other values according to the typography token
 */
// StyleDictionary.registerFormat({
//   name: "css/typographyClasses",
//   formatter: (dictionary) =>
//     dictionary.allProperties
//       .map(
//         (prop) => `
//         .${prop.name} {
//           font: var(--${prop.name});
//           letter-spacing: ${convertToVariableIfNeeded(
//             prop.original.value.letterSpacing
//           )};
//           text-transform: ${convertToVariableIfNeeded(
//             prop.original.value.textCase
//           )};
//           text-decoration: ${convertToVariableIfNeeded(
//             prop.original.value.textDecoration
//           )};
//         }`
//       )
//       .join("\n"),
// });

function getStyleDictionaryConfig(themeName, themeTokenSets) {
  return {
    include: themeTokenSets,
    platforms: {
      css: {
        transforms: [
          "ts/descriptionToComment",
          "ts/resolveMath",
          "ts/size/px",
          "ts/size/letterspacing",
          "ts/size/lineheight",
          "ts/type/fontWeight",
          "ts/color/hexrgba",
          "ts/color/modifiers",
          "ts/typography/css/shorthand",
          "ts/shadow/shorthand",
          "name/cti/kebab",
        ],
        buildPath: `theme/src/tokens-output/`,
        files: [
          {
            destination: `${themeName}.json`,
            format: "json/variables",
          },
        ],
      },
    },
  };
}

const configBlob = fs.readFileSync("config.json");
const config = JSON.parse(configBlob);
const dirPath = config.tokenSetsDirPath;
const themeMetaBlob = fs.readFileSync(config.tokenSetsThemeMetaPath);
const themeMeta = JSON.parse(themeMetaBlob);

themeMeta.forEach((theme) => {
  const { name: themeName, selectedTokenSets } = theme;
  const filteredTokenSets = selectedTokenSets
    ? _.filter(
        Object.keys(selectedTokenSets),
        (key) => selectedTokenSets[key] !== "disabled"
      )
    : [];
  const themeTokenSets = _.map(
    filteredTokenSets,
    (set) => dirPath + "/" + set + ".json"
  );
  const themeConfig = getStyleDictionaryConfig(themeName, themeTokenSets);
  const SD = StyleDictionary.extend(themeConfig);
  SD.buildAllPlatforms();
});

console.log("\n==============================================");
console.log("\nBuild completed!");
