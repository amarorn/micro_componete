import {ButtonConfirmation} from "../src"
import React from "react"
import {render} from '@testing-library/react'

test("loads and display component", ()=>{
    render(<ButtonConfirmation/>)
})