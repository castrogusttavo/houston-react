import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AmpouleIcon({ iconName = 'ampoule', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
