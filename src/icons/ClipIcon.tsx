import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ClipIcon({ iconName = 'clip', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
