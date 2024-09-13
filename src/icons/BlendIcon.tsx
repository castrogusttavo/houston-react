import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BlendIcon({ iconName = 'blend', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
