import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import App from '../src/App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    
  })

  it('renders welcome message', () => {
    render(<App />)
 
  })

  it('increments count on button click', async () => {
    render(<App />)
   
  })
})
