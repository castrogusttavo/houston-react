import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiUserIconIcon({ iconName = 'ai-user-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
