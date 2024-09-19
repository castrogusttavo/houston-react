import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiIdeaIcon({ iconName = 'ai-idea', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
