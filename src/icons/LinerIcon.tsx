import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LinerIcon({ iconName = 'liner', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
