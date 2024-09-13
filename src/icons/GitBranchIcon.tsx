import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitBranchIcon({
  iconName = 'git-branch',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
