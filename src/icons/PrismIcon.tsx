import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PrismIcon({ iconName = 'prism', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
