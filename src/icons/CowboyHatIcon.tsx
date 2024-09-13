import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CowboyHatIcon({
  iconName = 'cowboy-hat',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
