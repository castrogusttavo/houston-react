import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiIdeaIcon({ iconName = 'ai-idea-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
