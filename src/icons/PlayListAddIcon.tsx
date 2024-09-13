import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlayListAddIcon({
  iconName = 'play-list-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
