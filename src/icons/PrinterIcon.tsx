import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PrinterIcon({ iconName = 'printer', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
