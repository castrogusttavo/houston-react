import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckListIcon({
  iconName = 'check-list',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
