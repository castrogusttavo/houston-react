import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CosIcon({ iconName = 'cos', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
