import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VideoReplayIcon({
  iconName = 'video-replay',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
