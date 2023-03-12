import { registerChakraDocs } from "./tokenSheets/registerChakraDocs"
import { registerSwatchColor } from "./tokenSheets/registerSwatchColor";
import { registerSwatchSizing } from "./tokenSheets/registerSwatchSizing";
import { registerSwatchBorderRadius } from "./tokenSheets/registerSwatchBorderRadius";
import { registerSwatchSpacing } from "./tokenSheets/registerSwatchSpacing";
import { registerSwatchFontFamily } from "./tokenSheets/registerSwatchFontFamily";
import { registerSwatchFontWeights } from "./tokenSheets/registerSwatchFontWeights";
import { registerSwatchFontSizes } from "./tokenSheets/registerSwatchFontSizes";
import { registerSwatchBorderWidth } from "./tokenSheets/registerSwatchBorderWidth";
import { registerSwatchOpacity } from "./tokenSheets/registerSwatchOpacity";
import { registerSwatchLineHeights } from "./tokenSheets/registerSwatchLineHeights";
import { registerSwatchLetterSpacing } from "./tokenSheets/registerSwatchLetterSpacing";
import { registerSwatchParagraphSpacing } from "./tokenSheets/registerSwatchParagraphSpacing";
import { registerSwatchTextCase } from "./tokenSheets/registerSwatchTextCase";
import { registerSwatchAssets } from "./tokenSheets/registerSwatchAssets";
import { registerSwatchDimension } from "./tokenSheets/registerSwatchDimension";
import { registerSwatchTextDecoration } from "./tokenSheets/registerSwatchTextDecoration";
import { registerSwatchBorder } from "./tokenSheets/registerSwatchBorder";
import { registerSwatchBoxShadow } from "./tokenSheets/registerSwatchBoxShadow";
import { registerSwatchTypography } from "./tokenSheets/registerSwatchTypography";
import { registerSwatchComposition } from "./tokenSheets/registerSwatchComposition";


export function registerAllCustom() {
    registerChakraDocs();
  
    //TokenSheets
    registerSwatchColor();
    registerSwatchSizing();
    registerSwatchBorderRadius();
    registerSwatchSpacing();
    registerSwatchFontFamily();
    registerSwatchFontWeights();
    registerSwatchFontSizes();
    registerSwatchBorderWidth();
    registerSwatchOpacity();
    registerSwatchLineHeights();
    registerSwatchLetterSpacing();
    registerSwatchParagraphSpacing();
    registerSwatchTextCase();
    registerSwatchTextDecoration();
    registerSwatchAssets();
    registerSwatchDimension();
    registerSwatchBorder();
    registerSwatchBoxShadow();
    registerSwatchTypography();
    registerSwatchComposition();

}