import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WirelessIcon({ iconName = 'wireless', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
