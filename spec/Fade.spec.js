import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { default as Fade } from '../src'

const renderer = TestUtils.createRenderer()
let children, inner, outer, style

describe('Fade', () => {

  beforeEach(() => {
    renderer.render(<Fade><p>I'm so faded</p></Fade>)
    outer = renderer.getRenderOutput()
    style = outer.props.children[0]
    inner = outer.props.children[1]
  })

  it('renders an outer span', () => {
    expect(outer.type).toEqual('span')
  })

  it('renders a style element with default fade animation', () => {
    expect(style.type).toEqual('style')
    expect(style.props.dangerouslySetInnerHTML.__html.indexOf('react-fade-in')).toBeGreaterThan(-1)
    expect(style.props.dangerouslySetInnerHTML.__html.indexOf('react-fade-out')).toEqual(-1)
  })

  it('renders an inner div with default style props', () => {
    expect(inner.type).toEqual('div')
    expect(inner.props.style.animationIterationCount).toEqual(1)
    expect(inner.props.style.animationName).toEqual('react-fade-in')
    expect(inner.props.style.animationTimingFunction).toEqual('ease-in')
  })
})

describe('Fade in', () => {

  beforeEach(() => {
    renderer.render(<Fade in><p>I'm so faded</p></Fade>)
    outer = renderer.getRenderOutput()
    style = outer.props.children[0]
    inner = outer.props.children[1]
  })

  it('has correct fade animation', () => {
    expect(style.props.dangerouslySetInnerHTML.__html.indexOf('react-fade-in')).toBeGreaterThan(-1)
    expect(style.props.dangerouslySetInnerHTML.__html.indexOf('react-fade-out')).toEqual(-1)
  })

  it('has correct style props', () => {
    expect(inner.props.style.animationName).toEqual('react-fade-in')
    expect(inner.props.style.animationTimingFunction).toEqual('ease-in')
  })
})

describe('Fade out', () => {

  beforeEach(() => {
    renderer.render(<Fade out><p>I'm so faded</p></Fade>)
    outer = renderer.getRenderOutput()
    style = outer.props.children[0]
    inner = outer.props.children[1]
  })

  it('has correct fade animation', () => {
    expect(style.props.dangerouslySetInnerHTML.__html.indexOf('react-fade-in')).toEqual(-1)
    expect(style.props.dangerouslySetInnerHTML.__html.indexOf('react-fade-out')).toBeGreaterThan(-1)
  })

  it('has correct style props', () => {
    expect(inner.props.style.animationName).toEqual('react-fade-out')
    expect(inner.props.style.animationTimingFunction).toEqual('ease-out')
  })
})
