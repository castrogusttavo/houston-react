import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SmartIcon({ iconName = 'smart', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
