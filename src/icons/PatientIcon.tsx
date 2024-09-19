import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PatientIcon({ iconName = 'patient', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
