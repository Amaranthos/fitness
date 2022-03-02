import React from "react";

export function Card({ title, text }) {
  return (
    <section className="bg-white rounded p-6 border-b border-gray-400 cursor-pointer hover:bg-gray-200">
      <h3 className="text-gray-800 text-lg font-semibold whitespace-nowrap">
        {title}
      </h3>
    </section>
  );
}
