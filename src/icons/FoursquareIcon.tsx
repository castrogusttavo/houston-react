import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FoursquareIcon({
  iconName = 'foursquare',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
