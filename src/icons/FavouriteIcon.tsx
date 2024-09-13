import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FavouriteIcon({ iconName = 'favourite', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
