[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/react-fade.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-fade
[travis-image]: https://img.shields.io/travis/bentatum/react-fade.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/react-fade
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

# react-fade

Simple fades in React

`npm i react-fade`

## Fade in
Children components will start invisible and fade into a visible state.
```js
<Fade>
  <p>I am so faded</p>
</Fade>
```

## Fade out
Fade out requires some extra code to stay invisble after it's been faded-out. Right now, the recommended way of using `<Fade out/>` is to utilize the *duration* property in conjuction with css display or visibilty. For example:
```js
import { default as React, Component } from 'react'
import { default as Fade } from 'react-fade'

const fadeDuration = 10

class FadeExample extends Component {

  state = {
    fadeOut: false,
    visibility: 'visible'
  }

  componentDidUpdate(nextProps, { fadeOut }) {
    if (fadeOut) {
      setTimeout(() => {
        this.setState({
          visibility: 'hidden'
        })
      }, fadeDuration)
    }
  }
  
  render() {
    return (
      <div>
        <Fade
          out={this.state.fadeOut}
          duration={fadeDuration}
          style={{
            visibility: this.state.visibility
          }}
        >
          <p>I am so faded</p>
        </Fade>
        <button onClick={() => this.setState({ fadeOut: true })}>
          Fade out
        </button>
      </div>
    )
  }
}
```

### Props
| Prop          | Type                      | Description                                                             |
| :------------ | :------------------------ | :---------------------------------------------------------------------- |
| out           | bool                      | fades out instead of in - see instructions for usage patterns           |
| duration      | number                    | the amount of time in seconds that it takes to fade in or out           |
