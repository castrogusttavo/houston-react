import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MedicalMaskIcon({
  iconName = 'medical-mask',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
