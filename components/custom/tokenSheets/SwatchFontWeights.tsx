import * as React from "react";

export function SwatchFontWeights({
  className,
  fontWeights,
}: {
  className: string;
  fontWeights: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        fontWeight: fontWeights, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
