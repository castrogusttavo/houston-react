import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileValidationIcon({
  iconName = 'file-validation',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
