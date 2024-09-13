import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitPullRequestDraftIcon({
  iconName = 'git-pull-request-draft',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
