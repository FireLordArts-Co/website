import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

test('renders brand title', () => {
    render(<Home />)
    expect(screen.getByText("FirelordArts")).toBeInTheDocument()
})