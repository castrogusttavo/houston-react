import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BedSingle01Icon({
  iconName = 'bed-single-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
