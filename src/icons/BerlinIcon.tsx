import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BerlinIcon({ iconName = 'berlin', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
