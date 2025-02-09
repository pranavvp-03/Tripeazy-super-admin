import React from "react";

export function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border">
      {children}
    </div>
  );
}

export function CardHeader({ children }) {
  return <div className="border-b pb-2 mb-2">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
