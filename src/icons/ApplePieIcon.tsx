import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ApplePieIcon({ iconName = 'apple-pie', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
