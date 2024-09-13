import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UsbIcon({ iconName = 'usb', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
