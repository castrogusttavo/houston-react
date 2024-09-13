import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RedditIcon({ iconName = 'reddit', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
