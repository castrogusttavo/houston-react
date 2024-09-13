import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Building03Icon({
  iconName = 'building-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
