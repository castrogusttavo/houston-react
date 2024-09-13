import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImoIcon({ iconName = 'imo', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
