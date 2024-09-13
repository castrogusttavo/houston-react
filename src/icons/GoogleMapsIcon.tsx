import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GoogleMapsIcon({
  iconName = 'google-maps',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
