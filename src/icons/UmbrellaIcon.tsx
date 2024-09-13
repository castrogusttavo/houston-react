import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UmbrellaIcon({ iconName = 'umbrella', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
