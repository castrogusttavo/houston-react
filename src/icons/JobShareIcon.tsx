import React from 'react'
import { Icon, IconProps } from '../Icon'

export function JobShareIcon({ iconName = 'job-share', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
