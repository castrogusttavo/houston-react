import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BluetoothSearchIcon({
  iconName = 'bluetooth-search',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
