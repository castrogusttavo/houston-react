import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PenConnectBluetoothIcon({
  iconName = 'pen-connect-bluetooth',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
