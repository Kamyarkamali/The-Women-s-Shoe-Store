import { configureStore } from "@reduxjs/toolkit"

import {cretReducer} from "./slicer/slicer"


export const store=configureStore({
    reducer:cretReducer
})