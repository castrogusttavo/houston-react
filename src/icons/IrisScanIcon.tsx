import React from 'react'
import { Icon, IconProps } from '../Icon'

export function IrisScanIcon({ iconName = 'iris-scan', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
