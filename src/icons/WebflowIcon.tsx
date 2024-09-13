import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WebflowIcon({ iconName = 'webflow', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
