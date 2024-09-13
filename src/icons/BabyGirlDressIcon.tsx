import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BabyGirlDressIcon({
  iconName = 'baby-girl-dress',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
