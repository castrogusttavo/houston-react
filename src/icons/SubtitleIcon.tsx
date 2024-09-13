import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SubtitleIcon({ iconName = 'subtitle', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
