import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UsbNotConnected01Icon({
  iconName = 'usb-not-connected-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
