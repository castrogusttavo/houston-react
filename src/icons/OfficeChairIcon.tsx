import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OfficeChairIcon({
  iconName = 'office-chair',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
