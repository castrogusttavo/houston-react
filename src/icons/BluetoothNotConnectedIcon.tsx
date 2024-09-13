import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BluetoothNotConnectedIcon({
  iconName = 'bluetooth-not-connected',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
