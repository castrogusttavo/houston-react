import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RunningShoesIcon({
  iconName = 'running-shoes',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
