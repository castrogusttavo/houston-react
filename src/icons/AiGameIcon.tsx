import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiGameIcon({ iconName = 'ai-game', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
