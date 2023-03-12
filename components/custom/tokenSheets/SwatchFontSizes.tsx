import * as React from "react";

export function SwatchFontSizes({
  className,
  fontSizes,
}: {
  className: string;
  fontSizes: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        fontSize: fontSizes, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
