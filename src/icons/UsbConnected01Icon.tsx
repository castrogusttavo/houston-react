import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UsbConnected01Icon({
  iconName = 'usb-connected-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
