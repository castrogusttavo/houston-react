import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AlphaIcon({ iconName = 'alpha', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
