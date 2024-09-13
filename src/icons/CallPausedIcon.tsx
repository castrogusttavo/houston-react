import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallPausedIcon({
  iconName = 'call-paused',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
