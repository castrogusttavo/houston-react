import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PowerServiceIcon({
  iconName = 'power-service',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
