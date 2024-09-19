import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TulipIcon({ iconName = 'tulip', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
