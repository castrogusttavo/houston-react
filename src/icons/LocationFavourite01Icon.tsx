import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LocationFavourite01Icon({
  iconName = 'location-favourite-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
