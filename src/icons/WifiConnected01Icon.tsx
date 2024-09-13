import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WifiConnected01Icon({
  iconName = 'wifi-connected-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
