import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiVideoIcon({ iconName = 'ai-video-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
