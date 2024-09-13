import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CircleArrowVerticalIcon({
  iconName = 'circle-arrow-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
