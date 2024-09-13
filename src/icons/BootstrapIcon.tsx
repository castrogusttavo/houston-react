import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BootstrapIcon({ iconName = 'bootstrap', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
