import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Listing from './Listing'

test('renders content', () => {
  const listing = {
    module: "CS1010X"
  }

  const component = render(
    <Listing listing={listing} />
  )

  expect(component.container).toHaveTextContent(
    "CS1010X"
  )

  const element = component.getByText(
    "CS1010X"
  )
  expect(element).toBeDefined()

  const div = component.container.querySelector('.listing')
  expect(div).toHaveTextContent(
    "CS1010X"
  )

})
