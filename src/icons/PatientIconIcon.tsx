import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PatientIconIcon({ iconName = 'patient-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
