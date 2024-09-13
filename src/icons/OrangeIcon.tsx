import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OrangeIcon({ iconName = 'orange', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
