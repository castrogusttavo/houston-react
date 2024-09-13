import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IdeaIcon({ iconName = 'idea', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
