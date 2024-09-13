import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlayListMinusIcon({
  iconName = 'play-list-minus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
