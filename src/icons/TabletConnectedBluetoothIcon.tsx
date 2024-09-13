import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TabletConnectedBluetoothIcon({
  iconName = 'tablet-connected-bluetooth',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
