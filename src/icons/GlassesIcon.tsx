import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GlassesIcon({ iconName = 'glasses', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
