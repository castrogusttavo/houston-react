import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitMergeIcon({ iconName = 'git-merge', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
