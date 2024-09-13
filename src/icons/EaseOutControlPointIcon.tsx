import React from 'react'
import { Icon, IconProps } from '../Icon'

export function EaseOutControlPointIcon({
  iconName = 'ease-out-control-point',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
