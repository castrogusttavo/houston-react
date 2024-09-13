import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiMailIcon({ iconName = 'ai-mail', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
