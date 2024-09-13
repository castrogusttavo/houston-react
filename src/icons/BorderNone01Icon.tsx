import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BorderNone01Icon({
  iconName = 'border-none-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
