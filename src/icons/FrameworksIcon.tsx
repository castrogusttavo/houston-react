import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FrameworksIcon({ iconName = 'frameworks-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
