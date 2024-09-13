import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GroupLayersIcon({
  iconName = 'group-layers',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
