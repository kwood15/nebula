import React from 'react'
import renderNode from '../renderNode'


describe('renderNode', () => {
  it('renders out a string representation of the node', () => {
    const node = <div className="test" />
    expect(renderNode(node)).toBe('<div className="test" />')
  })

  it('renders text nodes', () => {
    const node = 'hello test'
    expect(renderNode(node)).toBe('hello test')
  })

  it('adds dot notation to components', () => {
    const FlagBody = () => <div />
    const node = <FlagBody />
    expect(renderNode(node)).toBe('<Flag.Body />')
  })

  it('renders children', () => {
    const node = (
      <div>test</div>
    )
    expect(renderNode(node)).toBe(
`<div>
test
</div>`)
  })
})
