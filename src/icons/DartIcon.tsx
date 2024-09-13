import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DartIcon({ iconName = 'dart', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
