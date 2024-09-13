import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WinkIcon({ iconName = 'wink', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
