import React from 'react'
import { Icon, IconProps } from '../Icon'

export function WinkingIcon({ iconName = 'winking', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
