import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlayListRemoveIcon({
  iconName = 'play-list-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
