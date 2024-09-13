import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RollingPinIcon({
  iconName = 'rolling-pin',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
