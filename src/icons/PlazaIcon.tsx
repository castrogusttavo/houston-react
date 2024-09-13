import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlazaIcon({ iconName = 'plaza', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
