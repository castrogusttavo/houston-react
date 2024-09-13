import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ContainerTruck01Icon({
  iconName = 'container-truck-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
