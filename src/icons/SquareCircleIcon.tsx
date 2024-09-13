import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareCircleIcon({
  iconName = 'square-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
