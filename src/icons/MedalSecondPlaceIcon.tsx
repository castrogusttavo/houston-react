import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MedalSecondPlaceIcon({
  iconName = 'medal-second-place',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
