import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Loading03Icon({
  iconName = 'loading-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
