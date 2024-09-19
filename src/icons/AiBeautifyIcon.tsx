import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AiBeautifyIcon({ iconName = 'ai-beautify-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
