import * as React from "react";

export function SwatchFontFamily({
  className,
  fontFamily,
}: {
  className: string;
  fontFamily: string;
}) {
  return (
    <header
      className={className}
      style={{ 
        fontFamily: fontFamily, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </header>
  );
}
