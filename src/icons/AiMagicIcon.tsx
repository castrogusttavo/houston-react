import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiMagicIcon({ iconName = 'ai-magic', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
