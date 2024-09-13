import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CheckmarkBadge03Icon({
  iconName = 'checkmark-badge-03',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
