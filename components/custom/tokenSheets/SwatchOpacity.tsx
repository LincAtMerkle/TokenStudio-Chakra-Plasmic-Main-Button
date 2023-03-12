import * as React from "react";

export function SwatchOpacity({
  className,
  opacity,
}: {
  className: string;
  opacity: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        height: 50, 
        width: 50, 
        backgroundColor: opacity 
    }}
    >
      {" "}
    </div>
  );
}
