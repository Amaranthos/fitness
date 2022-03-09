import React from "react";

export function CardList({ title, children }) {
  return (
    <article className="rounded bg-gray-300 p-2 m-4 w-auto md:mx-auto md:max-w-md">
      {title && (
        <div className="flex justify-between py-1">
          <h2 className="text-sm">{title}</h2>
        </div>
      )}
      <ul className="text-sm">{children}</ul>
    </article>
  );
}
