import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NpmIcon({ iconName = 'npm', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
