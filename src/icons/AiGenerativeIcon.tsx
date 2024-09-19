import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiGenerativeIcon({ iconName = 'ai-generative-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
