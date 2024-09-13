import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UsbConnected02Icon({
  iconName = 'usb-connected-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
