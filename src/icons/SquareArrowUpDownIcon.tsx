import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowUpDownIcon({
  iconName = 'square-arrow-up-down',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
