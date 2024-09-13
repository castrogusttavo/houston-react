import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowDownRightIcon({
  iconName = 'square-arrow-down-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
