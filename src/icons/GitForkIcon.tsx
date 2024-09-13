import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitForkIcon({ iconName = 'git-fork', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
