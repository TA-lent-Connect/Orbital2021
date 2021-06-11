import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ListingForm from './ListingForm'

test('<ListingForm /> updates parent state and calls onSubmit', () => {
  const createListing = jest.fn()

  const component = render(
    <ListingForm createListing={createListing} />
  )

  const input = component.container.querySelector('input')
  const form = component.container.querySelector('form')

  fireEvent.change(input, { 
    target: { value: 'CS1010X' }
  })
  fireEvent.submit(form)

  expect(createListing.mock.calls).toHaveLength(1)
  expect(createListing.mock.calls[0][0].module).toBe('CS1010X' )
})