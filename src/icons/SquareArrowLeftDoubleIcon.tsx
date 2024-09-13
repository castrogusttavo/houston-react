import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowLeftDoubleIcon({
  iconName = 'square-arrow-left-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
