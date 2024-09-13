import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GymnasticRingsIcon({
  iconName = 'gymnastic-rings',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
