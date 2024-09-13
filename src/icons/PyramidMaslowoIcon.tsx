import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PyramidMaslowoIcon({
  iconName = 'pyramid-maslowo',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
