import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PexelsIcon({ iconName = 'pexels', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
