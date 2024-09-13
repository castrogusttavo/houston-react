import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ModernTvFourKIcon({
  iconName = 'modern-tv-4-k',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
