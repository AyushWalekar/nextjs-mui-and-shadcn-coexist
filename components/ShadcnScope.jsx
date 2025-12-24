import React from "react";

export function ShadcnScope({ children, className = "" }) {
  return (
    <div className={`shadcn-scope min-h-screen ${className}`.trim()}>
      {children}
    </div>
  );
}


