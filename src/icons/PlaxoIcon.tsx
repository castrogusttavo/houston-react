import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlaxoIcon({ iconName = 'plaxo', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
