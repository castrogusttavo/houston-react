import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SandalsIcon({ iconName = 'sandals', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
