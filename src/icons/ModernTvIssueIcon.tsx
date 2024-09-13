import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ModernTvIssueIcon({
  iconName = 'modern-tv-issue',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
