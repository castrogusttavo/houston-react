import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowRightDoubleIcon({
  iconName = 'square-arrow-right-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
