import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GreaterThanCircleIcon({
  iconName = 'greater-than-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
