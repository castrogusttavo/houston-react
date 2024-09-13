import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ZakatIcon({ iconName = 'zakat', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
