import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UngroupItemsIcon({
  iconName = 'ungroup-items',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
