import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowUpDoubleIcon({
  iconName = 'square-arrow-up-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
