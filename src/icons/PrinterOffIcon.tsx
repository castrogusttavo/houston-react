import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PrinterOffIcon({
  iconName = 'printer-off',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
