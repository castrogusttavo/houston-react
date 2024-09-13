import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CentralizedIcon({
  iconName = 'centralized',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
