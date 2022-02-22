# react-video-recorder-custom

## Installation

```sh
yarn add react-video-recorder-custom

# Note: this project has react, react-dom, prop-types & styled-components as peerDependencies,
#       so if you're starting from scratch run this instead:
yarn add react-video-recorder-custom react react-dom prop-types styled-components
```

## Usage

Basic usage:

```jsx
import React from 'react'
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder-custom'

const App = () => (
  <VideoRecorder
    onRecordingComplete={(videoBlob) => {
      // Do something with the video...
      console.log('videoBlob', videoBlob)
    }}
  />
)

render(<App />, document.getElementById('root'))
```

**Note:** if you click the **"Show info"** button in the top-right corner, you should be able to see a table with the supported prop-types.

### Modifying the UI

All the UI can be customized by passing the following props:

#### `renderDisconnectedView`

View that's rendered before the user enables the camera access.

**Default value:** `() => <DisconnectedView />`

[See `<DisconnectedView />` source here.](src/defaults/disconnected-view.js)

#### `renderLoadingView`

View that's rendered while the camera is initializing.

`() => <LoadingView />`

[See `<LoadingView />` source here.](src/defaults/loading-view.js)

#### `renderVideoInputView`

View that's rendered when the browser does not support inline recording but allows opening the native camera (mainly iOS).

**Default value:** `({ videoInput }) => <Fragment>{videoInput}</Fragment/>`

#### `renderUnsupportedView`

View that's rendered when the browser does not support recording video.

**Default value:** `() => <UnsupportedView />`

[See `<UnsupportedView />` source here.](src/defaults/unsupported-view.js)

#### `renderErrorView`

View that's rendered an unexpected error occurs.

**Default value:** `() => <ErrorView />`

[See `<ErrorView />` source here.](src/defaults/error-view.js)

#### `renderActions`

Overlay that's rendered on top of the views and that contains the elements like the buttons, the timer or the countdown.

[See the default implementation here.](src/defaults/render-actions.js)

#### Title Messages on Button

##### Record Screen

- Record Button: PRESS REC WHEN READY

##### Stop Screen

- Stop Button: STOP BUTTON

##### Video Test and Check Screen

- Record another Button: RECORD ANOTHER
- Play Button(If Stopped): PLAY VIDEO
- Pause Button(If Playing): PAUSE VIDEO

## Development

Requirements

`node version ">=8.3"`

Install packages

```sh
yarn install
```

Run the storybook demo

```sh
yarn start
```

With help of `react-video-recorder package`
