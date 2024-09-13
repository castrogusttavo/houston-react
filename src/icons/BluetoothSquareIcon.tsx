import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BluetoothSquareIcon({
  iconName = 'bluetooth-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
