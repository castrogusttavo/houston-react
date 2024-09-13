import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ConstellationIcon({
  iconName = 'constellation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
