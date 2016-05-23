import { default as React, PropTypes } from 'react'
import prefixr from 'react-prefixr'

const inCss = `
  @-webkit-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }

  @-moz-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }

  @-ms-keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }
`

const outCss = `
  @-webkit-keyframes react-fade-out {
    0%   { opacity: 1; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
  }

  @-moz-keyframes react-fade-out {
    0%   { opacity: 1; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
  }

  @-ms-keyframes react-fade-out {
    0%   { opacity: 1; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes react-fade-out {
    0%   { opacity: 1; }
    50%  { opacity: 1; }
    100% { opacity: 0; }
  }
`

const Fade = (props) =>
  <span>
    <style dangerouslySetInnerHTML={{
      __html: (props.out ? outCss : inCss).replace(/\n/g, '').replace(/\s\s+/g, ' ')
    }} />
    <span
      style={prefixr({
        animationDuration: 1,
        animationName: `react-fade-${(props.out ? 'out' : 'in')}`
      })}
    >
      {props.children}
    </span>
  </span>

Fade.propTypes = {
  children: PropTypes.node.isRequired,
  in: PropTypes.bool,
  out: PropTypes.bool
}

Fade.defaultProps = {
  in: true,
  out: false
}

export default Fade
