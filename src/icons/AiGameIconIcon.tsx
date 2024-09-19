import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiGameIconIcon({ iconName = 'ai-game-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
