import React from "react";

export default function Dark() {
    // const dark = window.localStorage;

    const testCase = () => {
        if (typeof window !== 'undefined') {
        return('You are on the browser')
        // 👉️ can use localStorage here
      } else {
        return('You are on the server')
        // 👉️ can't use localStorage
      }}
  return (
    <div>
      <h1>{testCase()}</h1>
    </div>
  );
}