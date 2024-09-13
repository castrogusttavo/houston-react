import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GrapesIcon({ iconName = 'grapes', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
