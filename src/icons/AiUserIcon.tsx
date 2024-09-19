import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiUserIcon({ iconName = 'ai-user', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
