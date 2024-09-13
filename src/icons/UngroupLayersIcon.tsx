import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UngroupLayersIcon({
  iconName = 'ungroup-layers',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
