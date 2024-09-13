import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoogleHomeIcon({
  iconName = 'google-home',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
