import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MedalThirdPlaceIcon({
  iconName = 'medal-third-place',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
