import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SquareSquareIcon({
  iconName = 'square-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
