import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SkullIcon({ iconName = 'skull', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
