import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CloudIcon({ iconName = 'cloud', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
