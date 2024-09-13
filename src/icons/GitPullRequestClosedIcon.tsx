import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitPullRequestClosedIcon({
  iconName = 'git-pull-request-closed',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
