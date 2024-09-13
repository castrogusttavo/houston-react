import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComputerVideoCallIcon({
  iconName = 'computer-video-call',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
