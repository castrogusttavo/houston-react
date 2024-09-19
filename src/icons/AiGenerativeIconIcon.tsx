import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiGenerativeIconIcon({ iconName = 'ai-generative-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
