import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FortressIcon({ iconName = 'fortress', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
