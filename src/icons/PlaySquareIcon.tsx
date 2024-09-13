import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlaySquareIcon({
  iconName = 'play-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
