import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiLockIcon({ iconName = 'ai-lock', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
