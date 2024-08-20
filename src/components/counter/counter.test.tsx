import { render, screen } from "@testing-library/react"
import Counter from "./counter"


describe('counter',()=>{
    test('renders correctly',()=>{
        render(<Counter/>)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()
    })
})