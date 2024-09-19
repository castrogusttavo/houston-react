import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PatientIcon({ iconName = 'patient-icon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
