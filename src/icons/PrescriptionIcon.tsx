import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PrescriptionIcon({
  iconName = 'prescription',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
