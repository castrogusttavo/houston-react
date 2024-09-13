import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GreaterThanIcon({
  iconName = 'greater-than',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
