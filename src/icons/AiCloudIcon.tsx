import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiCloudIcon({ iconName = 'ai-cloud', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
