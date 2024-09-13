import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlayCircleIcon({
  iconName = 'play-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
