import { defineWorld } from "@latticexyz/world";

export default defineWorld({
  namespace: "app",
  tables: {
    Counter: {
      schema: {
        value: "uint32",
      },
      key: [],
    },
    Position: {
      schema: {
        x: "int32",
        y: "int32",
      },
      key: []
    },
  },
});
