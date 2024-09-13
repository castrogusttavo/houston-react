import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SmartPhone01Icon({
  iconName = 'smart-phone-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
