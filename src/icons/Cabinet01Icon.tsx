import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Cabinet01Icon({
  iconName = 'cabinet-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
