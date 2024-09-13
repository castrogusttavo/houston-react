import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowUpRightIcon({
  iconName = 'square-arrow-up-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
