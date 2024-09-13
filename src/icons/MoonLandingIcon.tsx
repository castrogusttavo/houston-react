import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MoonLandingIcon({
  iconName = 'moon-landing',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
