import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TabletConnectedUsbIcon({
  iconName = 'tablet-connected-usb',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
