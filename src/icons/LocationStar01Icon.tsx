import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LocationStar01Icon({
  iconName = 'location-star-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
