import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JobLinkIcon({ iconName = 'job-link', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
