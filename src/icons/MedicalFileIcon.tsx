import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MedicalFileIcon({
  iconName = 'medical-file',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
