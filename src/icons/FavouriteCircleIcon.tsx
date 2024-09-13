import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FavouriteCircleIcon({
  iconName = 'favourite-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
