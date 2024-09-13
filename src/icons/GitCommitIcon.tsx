import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitCommitIcon({
  iconName = 'git-commit',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
