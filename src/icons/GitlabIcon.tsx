import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GitlabIcon({ iconName = 'gitlab', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
