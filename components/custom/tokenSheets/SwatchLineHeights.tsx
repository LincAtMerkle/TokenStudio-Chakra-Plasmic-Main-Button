import * as React from "react";

export function SwatchLineHeights({
  className,
  lineHeights,
}: {
  className: string;
  lineHeights: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        lineHeight: lineHeights, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
