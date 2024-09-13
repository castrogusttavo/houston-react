import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LicenseIcon({ iconName = 'license', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
