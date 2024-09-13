import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AngryIcon({ iconName = 'angry', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
