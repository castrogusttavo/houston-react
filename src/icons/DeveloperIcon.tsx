import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DeveloperIcon({ iconName = 'developer', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
