import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DollarSquareIcon({
  iconName = 'dollar-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
