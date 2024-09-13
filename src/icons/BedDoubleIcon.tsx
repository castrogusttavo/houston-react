import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BedDoubleIcon({
  iconName = 'bed-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
