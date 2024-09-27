import { CountReducer } from "./reducer";
import { createStore } from "@reduxjs/toolkit";

export const Store = createStore(CountReducer)