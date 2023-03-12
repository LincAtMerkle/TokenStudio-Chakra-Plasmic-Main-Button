import * as React from "react";

export function SwatchSpacing({
  className,
  spacing,
}: {
  className: string;
  spacing: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        height: spacing, 
        width: spacing, 
        backgroundColor: "blue" 
    }}
    >
      {" "}
    </div>
  );
}
