import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PrisonIcon({ iconName = 'prison', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
