import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoleculesIcon({ iconName = 'molecules', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
