import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiDisconnected02Icon({
  iconName = 'wifi-disconnected-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
