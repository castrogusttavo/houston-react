import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileAudioIcon({
  iconName = 'file-audio',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
