import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiImageIcon({ iconName = 'ai-image', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
