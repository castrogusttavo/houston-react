import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiUserIcon({ iconName = 'ai-user-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
