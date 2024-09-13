import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiViewIcon({ iconName = 'ai-view', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
