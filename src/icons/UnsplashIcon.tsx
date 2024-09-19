import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UnsplashIcon({ iconName = 'unsplash-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
