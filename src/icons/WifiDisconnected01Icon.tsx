import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiDisconnected01Icon({
  iconName = 'wifi-disconnected-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
