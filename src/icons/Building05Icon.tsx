import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Building05Icon({
  iconName = 'building-05',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
