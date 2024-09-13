import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TabletPenIcon({
  iconName = 'tablet-pen',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
