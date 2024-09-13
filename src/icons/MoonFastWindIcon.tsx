import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonFastWindIcon({
  iconName = 'moon-fast-wind',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
