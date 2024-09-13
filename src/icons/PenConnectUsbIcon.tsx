import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PenConnectUsbIcon({
  iconName = 'pen-connect-usb',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
