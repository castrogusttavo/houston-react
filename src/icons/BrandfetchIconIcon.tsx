import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BrandfetchIconIcon({ iconName = 'brandfetch-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
