import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IndiaGateIcon({
  iconName = 'india-gate',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
