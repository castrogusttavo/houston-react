import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CodeIcon({ iconName = 'code', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
