import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FinsIcon({ iconName = 'fins', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
