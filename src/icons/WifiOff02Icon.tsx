import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiOff02Icon({
  iconName = 'wifi-off-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
