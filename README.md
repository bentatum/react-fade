[![npm version](https://badge.fury.io/js/react-fade.svg)](https://badge.fury.io/js/react-fade)

# react-fade
A simple fade-in and fade-out action in the form of a React component.

`npm i react-fade`

## Fade in
Children components will start invisible and fade into a visible state.
```javascript
<Fade>
  <p>I am so faded</p>
</Fade>
```

## Fade out
Fade out requires some extra code to stay invisble after it's been faded-out. Right now, the recommended way of using `<Fade out/>` is to utilize the *duration* property in conjuction with css display or visibilty. For example:
```javascript
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
