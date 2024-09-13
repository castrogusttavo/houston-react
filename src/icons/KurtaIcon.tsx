import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KurtaIcon({ iconName = 'kurta', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
