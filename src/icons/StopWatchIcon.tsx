import React from 'react'
import { Icon, IconProps } from '../Icon'

export function StopWatchIcon({
  iconName = 'stop-watch',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
