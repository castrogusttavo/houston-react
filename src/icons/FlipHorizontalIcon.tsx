import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FlipHorizontalIcon({
  iconName = 'flip-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
