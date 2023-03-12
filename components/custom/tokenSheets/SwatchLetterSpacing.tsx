import * as React from "react";

export function SwatchLetterSpacing({
  className,
  letterSpacing,
}: {
  className: string;
  letterSpacing: string;
}) {
  return (
    <div
      className={className}
      style={{ 
        letterSpacing: letterSpacing, 
        backgroundColor: "yellow" 
    }}
    >
      {" "}
    </div>
  );
}
