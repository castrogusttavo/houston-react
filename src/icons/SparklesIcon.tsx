import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SparklesIcon({ iconName = 'sparkles', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
