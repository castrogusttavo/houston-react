import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowVerticalIcon({
  iconName = 'square-arrow-vertical',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
