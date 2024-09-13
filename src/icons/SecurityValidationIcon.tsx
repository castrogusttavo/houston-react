import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SecurityValidationIcon({
  iconName = 'security-validation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
