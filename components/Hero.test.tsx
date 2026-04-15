import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

test('renders brand title', () => {
  render(<Hero />)
  expect(screen.getByText("FireLord Arts")).toBeInTheDocument()
})