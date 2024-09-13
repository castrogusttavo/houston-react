import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GrokIcon({ iconName = 'grok', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
