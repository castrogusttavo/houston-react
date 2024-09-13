import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AbacusIcon({ iconName = 'abacus', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
