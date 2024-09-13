import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TvIssueIcon({ iconName = 'tv-issue', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
