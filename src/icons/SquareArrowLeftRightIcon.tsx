import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareArrowLeftRightIcon({
  iconName = 'square-arrow-left-right',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
