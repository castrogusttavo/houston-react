import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SecurityKeyUsbIcon({
  iconName = 'security-key-usb',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
