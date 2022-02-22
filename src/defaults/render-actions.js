import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button, { ButtonTransparent, ButtonRound } from './button'
import RecordButton from './record-button'
import StopButton from './stop-button'
import Timer from './timer'
import Countdown from './countdown'

const ActionsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ActionMainWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px;
`

// const TestButton = styled.button`
//   border: 0;
//   background: #de9f3b;
//   border-radius: 15px;
//   color: #fff;
//   font-size: 16px;
//   line-height: 1;
//   padding: 12px 30px;
//   font-weight: 600;
//   width: 140px;
//   height: 40px;
//   position: absolute;
// `

const Actions = ({
  t,
  isVideoInputSupported,
  isInlineRecordingSupported,
  thereWasAnError,
  isRecording,
  isCameraOn,
  streamIsReady,
  isConnecting,
  isRunningCountdown,
  isReplayingVideo,
  countdownTime,
  timeLimit,
  showReplayControls,
  replayVideoAutoplayAndLoopOff,
  useVideoInput,
  handleReplayVideoClick,
  handleStopVideoClick,
  playStatus,
  onTurnOnCamera,
  onTurnOffCamera,
  onOpenVideoInput,
  onStartRecording,
  onStopRecording,
  onPauseRecording,
  onResumeRecording,
  onStopReplaying,
  onConfirm
}) => {
  const renderContent = () => {
    const shouldUseVideoInput =
      !isInlineRecordingSupported && isVideoInputSupported

    if (
      (!isInlineRecordingSupported && !isVideoInputSupported) ||
      thereWasAnError ||
      isConnecting ||
      isRunningCountdown
    ) {
      return null
    }

    if (isReplayingVideo) {
      return (
        <>
          <ButtonTransparent
            type='button'
            onClick={onStopReplaying}
            data-qa='start-replaying'
            title={t('RECORD ANOTHER')}
          >
            <svg
              width={24}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <circle cx='256' cy='256' r='256' fill='#d93025' />
            </svg>
          </ButtonTransparent>
          {playStatus ? (
            <ButtonTransparent
              type='button'
              onClick={handleReplayVideoClick}
              data-qa='start-playing'
              title={t('PLAY VIDEO')}
            >
              <svg
                width={24}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='playButtonSvg'
              >
                <path
                  d='M60.54 512c-17.06 0-30.43-13.86-30.43-31.56V31.55C30.12 13.86 43.48 0 60.55 0A32.94 32.94 0 0 1 77 4.52L465.7 229c10.13 5.85 16.18 16 16.18 27s-6 21.2-16.18 27L77 507.48A32.92 32.92 0 0 1 60.55 512Z'
                  fill='#fff'
                />
              </svg>
            </ButtonTransparent>
          ) : (
            <ButtonTransparent
              type='button'
              onClick={handleStopVideoClick}
              data-qa='stop-playing'
              title={t('PAUSE VIDEO')}
            >
              <svg
                width={24}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  d='M395 512a73.14 73.14 0 0 1-73.14-73.14V73.14a73.14 73.14 0 1 1 146.29 0v365.72A73.14 73.14 0 0 1 395 512ZM117 512a73.14 73.14 0 0 1-73.14-73.14V73.14a73.14 73.14 0 1 1 146.29 0v365.72A73.14 73.14 0 0 1 117 512Z'
                  fill='#fff'
                />
              </svg>
            </ButtonTransparent>
          )}
        </>
      )
    }

    if (isRecording) {
      return (
        <StopButton
          type='button'
          onClick={onStopRecording}
          title={t('STOP BUTTON')}
          data-qa='stop-recording'
        />
      )
    }

    if (isCameraOn && streamIsReady) {
      return (
        <RecordButton
          t={t}
          type='button'
          onClick={onStartRecording}
          data-qa='start-recording'
        />
      )
    }

    if (useVideoInput) {
      return (
        <Button type='button' onClick={onOpenVideoInput} data-qa='open-input'>
          {t('Upload a video')}
        </Button>
      )
    }

    return shouldUseVideoInput ? (
      <ButtonRound
        type='button'
        onClick={onOpenVideoInput}
        data-qa='open-input'
      >
        {t('Record a video')}
      </ButtonRound>
    ) : (
      <ButtonRound
        type='button'
        onClick={onTurnOnCamera}
        data-qa='turn-on-camera'
      >
        {t('Turn my camera ON')}
      </ButtonRound>
    )
  }

  return (
    <>
      {/*
        {!isRecording && !isRunningCountdown && isCameraOn && streamIsReady && (
          <TestButton
            t={t}
            type='button'
            onClick={onStartRecording}
            data-qa='start-recording'
          >
            Test Video
          </TestButton>
        )}
        */}
      <ActionMainWrapper>
        {isRecording && <Timer timeLimit={timeLimit} />}
        {isRunningCountdown && <Countdown countdownTime={countdownTime} />}
        <ActionsWrapper>{renderContent()}</ActionsWrapper>
      </ActionMainWrapper>
    </>
  )
}

Actions.propTypes = {
  t: PropTypes.func,
  isVideoInputSupported: PropTypes.bool,
  isInlineRecordingSupported: PropTypes.bool,
  thereWasAnError: PropTypes.bool,
  isRecording: PropTypes.bool,
  isCameraOn: PropTypes.bool,
  streamIsReady: PropTypes.bool,
  isConnecting: PropTypes.bool,
  isRunningCountdown: PropTypes.bool,
  countdownTime: PropTypes.number,
  timeLimit: PropTypes.number,
  showReplayControls: PropTypes.bool,
  replayVideoAutoplayAndLoopOff: PropTypes.bool,
  isReplayingVideo: PropTypes.bool,
  useVideoInput: PropTypes.bool,

  onTurnOnCamera: PropTypes.func,
  onTurnOffCamera: PropTypes.func,
  onOpenVideoInput: PropTypes.func,
  onStartRecording: PropTypes.func,
  onStopRecording: PropTypes.func,
  onPauseRecording: PropTypes.func,
  onResumeRecording: PropTypes.func,
  onStopReplaying: PropTypes.func,
  onConfirm: PropTypes.func,
  handleReplayVideoClick: PropTypes.func,
  handleStopVideoClick: PropTypes.func,
  playStatus: PropTypes.bool
}

export default Actions
