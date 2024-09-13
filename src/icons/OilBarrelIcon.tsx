import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OilBarrelIcon({
  iconName = 'oil-barrel',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
