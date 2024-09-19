import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PexelsIconIcon({ iconName = 'pexels-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
