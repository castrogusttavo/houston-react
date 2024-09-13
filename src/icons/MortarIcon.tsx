import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MortarIcon({ iconName = 'mortar', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
