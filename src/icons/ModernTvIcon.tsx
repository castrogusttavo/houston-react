import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ModernTvIcon({ iconName = 'modern-tv', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
