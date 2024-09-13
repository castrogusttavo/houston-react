import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CableCarIcon({ iconName = 'cable-car', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
