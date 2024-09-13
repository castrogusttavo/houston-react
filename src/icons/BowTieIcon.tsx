import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BowTieIcon({ iconName = 'bow-tie', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
