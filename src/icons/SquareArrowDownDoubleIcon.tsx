import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowDownDoubleIcon({
  iconName = 'square-arrow-down-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
