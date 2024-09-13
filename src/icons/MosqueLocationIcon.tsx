import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MosqueLocationIcon({
  iconName = 'mosque-location',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
