import * as React from "react";
import { testAdd } from "wasm_demo/index";

export default () => {
  console.log(testAdd(1, 2))

  return (
    <div className="inline">
      <h1>Hello world</h1>
    </div>
  )
}
