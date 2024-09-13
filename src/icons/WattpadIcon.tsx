import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WattpadIcon({ iconName = 'wattpad', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
