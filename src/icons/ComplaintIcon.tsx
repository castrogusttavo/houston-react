import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComplaintIcon({ iconName = 'complaint', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
