import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GrinningIcon({ iconName = 'grinning', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
