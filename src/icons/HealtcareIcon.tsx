import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HealtcareIcon({ iconName = 'healtcare', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
