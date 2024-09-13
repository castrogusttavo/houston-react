import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ContainerTruckIcon({
  iconName = 'container-truck',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
