import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiBookIcon({ iconName = 'ai-book', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
