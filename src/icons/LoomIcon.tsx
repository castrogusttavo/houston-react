import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LoomIcon({ iconName = 'loom', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
