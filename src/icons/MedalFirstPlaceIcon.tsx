import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MedalFirstPlaceIcon({
  iconName = 'medal-first-place',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
