import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleArrowHorizontalIcon({
  iconName = 'circle-arrow-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
