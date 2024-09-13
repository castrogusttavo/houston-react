import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MapingIcon({ iconName = 'maping', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
