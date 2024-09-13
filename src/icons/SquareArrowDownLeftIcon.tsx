import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowDownLeftIcon({
  iconName = 'square-arrow-down-left',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
