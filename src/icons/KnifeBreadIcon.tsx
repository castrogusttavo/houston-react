import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KnifeBreadIcon({
  iconName = 'knife-bread',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
