import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

test('renders brand title', () => {
  render(<Header />)
  expect(screen.getByText("FireLord Arts")).toBeInTheDocument()
})

test('renders secondary title', () => {
  render(<Header />)
  expect(screen.getByText("Handcrafted Decor")).toBeInTheDocument()
})